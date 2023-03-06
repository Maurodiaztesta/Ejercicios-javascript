const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];


for (let index = 0; index < alumns.length; index++) {
    const aprobado = alumns[index];
    if (((aprobado.T1 && aprobado.T2) == true) || ((aprobado.T2 && aprobado.T3) == true) || ((aprobado.T1 && aprobado.T3) == true)){
        aprobado.isApproved = true;
    } else {
        aprobado.isApproved = false;
    }
}
console.log(alumns);