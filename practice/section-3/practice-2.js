'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let arr = [];
  for (let i = 0; i<collectionA.length;i++){
    for (let j = 0;j<objectB.value.length; j++){
      if (collectionA[i].key == objectB.value[j] && collectionA[i].count >= 3) {
        collectionA[i].count -= parseInt(collectionA[i].count/3);

        break;
      }
    }
  }
  console.log(collectionA);
  return collectionA;
}
