const userAnwsers = [];

const confirmExample = (descripcion) => {
    confirm(descripcion);
}

const promptExample = (descripcion) => {
    prompt(descripcion);
}

const father = (descripcion, op) => {
    return userAnwsers.push(op(descripcion));
}

father("Hola", confirmExample);
father("Adios", promptExample);