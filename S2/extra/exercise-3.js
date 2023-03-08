const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let arrayCont = [];

for (const user of users) {
    for (const key in user.favoritesSounds) {
        if (!arrayCont[key]){
            arrayCont[key] = 1;
            console.log(`${arrayCont[key]} entra por primera vez en ${key}`);
        } else {
            arrayCont[key]++
            console.log(`${arrayCont[key]} es la suma de ${key}`);
        }
    }
}
console.log(arrayCont);



// let contShower = 0;
// let contTrain = 0;
// let contFirecamps = 0;
// let contWaves = 0;
// let contRain = 0;


// for (const user of users) {
//     for (const key in user.favoritesSounds) {
//        if (key.includes("shower")) {
//         contShower++;
//        } else if (key.includes("train")) {
//             contTrain++
//        } else if (key.includes("firecamp")){
//             contFirecamps++
//        } else if (key.includes("waves")){
//             contWaves++
//        } else {
//             contRain++
// }
//     }
// }

// console.log(contShower);
// console.log(contTrain);
// console.log(contFirecamps);
// console.log(contWaves);
// console.log(contRain);