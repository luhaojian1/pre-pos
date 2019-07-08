'use strict';

function createUpdatedCollection(collectionA, objectB) {


  let arr = countSameElements(collectionA);
  for (let i = 0; i<arr.length;i++){
    for (let j = 0;j<objectB.value.length; j++){
      if (arr[i].key == objectB.value[j] && arr[i].count >= 3) {
        arr[i].count -= parseInt(arr[i].count/3);

        break;
      }
    }
  }
  console.log(arr);
  return arr;
}

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
