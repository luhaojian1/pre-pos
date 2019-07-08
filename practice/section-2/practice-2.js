'use strict';

function countSameElements(collection) {
  let arr = [];
  let ret = [];
  for(let i = 0;i<collection.length; i++){
    let flag = false;
    for(let j = 0; j<arr.length; j++){
      if (collection[i].length>1){
        ret = collection[i].split('-');
        if (ret[0] === arr[j].key){
          arr[j].count++;
          flag = true;
          continue;
        }
      }
      if (collection[i] === arr[j].key){
        arr[j].count++;
        flag = true;
        continue;
      }
    }
    console.log(flag);
    if (flag === false){
      if (collection[i].length>1) {
        ret = collection[i].split('-');
        arr.push({
          key:ret[0],
          count:parseInt(ret[1])
        });
      }
      else arr.push({
        key:collection[i],
        count:1
      });

    }
  }
  console.log(arr);
  return arr;
}
