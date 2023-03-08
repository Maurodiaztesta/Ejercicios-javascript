function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        return i;
      }
    }
  }
  
//   let index = findArrayIndex(
//     ["Caracol", "Mosquito", "Salamandra", "Ajolote"],
//     "Ajolote"
//   );
//   console.log(index);

function removeItem(array, text) {
    findArrayIndex(array, text)
    array.splice(text, 1);
    console.log(array);
}

removeItem(
 ["Caracol", "Mosquito", "Salamandra", "Ajolote"],
 "Ajolote"
);
