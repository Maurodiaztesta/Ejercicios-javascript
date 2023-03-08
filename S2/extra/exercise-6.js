function swap(array, index1, index2) {
    let indexPrimero = array[index1];
    array[index1] = array[index2];
    array[index2] = indexPrimero;
    return array;
}

const futbolistasArray = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 1, 3);
console.log(futbolistasArray);

const futbolistasArray2 = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0, 1);
console.log(futbolistasArray2);
