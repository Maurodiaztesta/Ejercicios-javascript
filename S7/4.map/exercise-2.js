const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];



const nombresCambio = users.map((nombre) => {
    if (nombre.name.startsWith("A")) {
        nombre.name = "Anacleto";
        return nombre.name;
    } else{
        return nombre.name;
    }
});
console.log(nombresCambio);


