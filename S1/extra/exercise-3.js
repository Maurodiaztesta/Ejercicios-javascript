const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

const peliculaPequeñaArray = [];
const peliculaMedianaArray = [];
const peliculaGrandeArray = [];

for (let index = 0; index < movies.length; index++) {
    const duration = movies[index];
    if (duration.durationInMinutes < 100) {
        peliculaPequeñaArray.push(duration);
    } else if ((duration.durationInMinutes >= 100) && (duration.durationInMinutes < 200)){
        peliculaMedianaArray.push(duration);
    } else {
        peliculaGrandeArray.push(duration);
    }
}
console.log("Peliculas pequeñas: ", peliculaPequeñaArray);
console.log("Peliculas medianas: ", peliculaMedianaArray);
console.log("Peliculas grandes: ", peliculaGrandeArray);

