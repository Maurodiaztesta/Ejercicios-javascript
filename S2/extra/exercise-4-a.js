function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    // let objeto = array[i];
    if (array[i] === text) {
      return i;
    }
  }
}

let index = findArrayIndex(
  ["Caracol", "Mosquito", "Salamandra", "Ajolote"],
  "Ajolote"
);
console.log(index);

let index2 = findArrayIndex(
  ["Caracol", "Mosquito", "Salamandra", "Ajolote"],
  "Caracol"
);
console.log(index2);
