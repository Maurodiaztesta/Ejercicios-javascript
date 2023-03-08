const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const viajes = cities.map((city) => {
    if (city.isVisited == true) {
        city.name += ": (Visitado)";
        return city;
    } return city;
})
console.log(viajes);