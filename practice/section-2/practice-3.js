'use strict';

function countSameElements(collection) {
  let arr = [];
  let ret = [];
  for(let i = 0;i<collection.length; i++){
    let flag = false;
    for(let j = 0; j<arr.length; j++){
      if (collection[i].length>1){
        ret = collection[i].split(/[\[\]:-]/g);
        if (ret[0] === arr[j].name){
          arr[j].summary += parseInt(ret[1]);
          flag = true;
          continue;
        }
      }
      else if (collection[i] === arr[j].name){
        arr[j].summary++;
        flag = true;
        continue;
      }
    }
    if (flag === false){
      if (collection[i].length>1) {
        ret = collection[i].split(/[\[\]:-]/g);
        arr.push({
          name:ret[0],
          summary:parseInt(ret[1])
        });
      }
      else arr.push({
        name:collection[i],
        summary:1
      });

    }
  }
  console.log(arr);
  return arr;
}
