const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];


const caracter = streamers.filter((persona) => {
    const loleros = persona.gameMorePlayed.includes('Legends');
    if (loleros && persona.age > 35) {
        persona.gameMorePlayed = persona.gameMorePlayed.toLocaleUpperCase();
    }
    return loleros;
})

console.log(caracter);
