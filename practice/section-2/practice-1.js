'use strict';

function countSameElements(collection) {

  let arr =[];
  console.log(collection.length);
  for(let i = 0;i<collection.length; i++){
    let flag = false;
    for(let j = 0; j<arr.length; j++){
       console.log(collection[i]+" "+arr[j].key+" "+ arr[j].value);
        if (collection[i] === arr[j].key){
          arr[j].count++;
          flag = true;
          continue;
        }
      }
      console.log(flag);
      if (flag == false){
        arr.push({
          key:collection[i],
          count:1
        });

      }
  }
  console.log(arr);
  return arr;
}
