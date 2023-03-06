const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

for (let i = 0; i < foodSchedule.length; i++) {
    const food = foodSchedule[i];
    if (!food.isVegan) {
        food.name = fruits[i];
        food.isVegan = true;
    }
}

console.log(foodSchedule);

// for (let i = 0; i < foodSchedule.length; i++) {
//     if (!foodSchedule[i].isVegan) {
//         foodSchedule[i].name = fruits[i];
//         foodSchedule[i].isVegan = true;
//     }
// }

// console.log(foodSchedule);

// foodSchedule.forEach(
//     function(food) {
//         if (food.isVegan) {
//             food.name = fruits.shift();
//             food.isVegan = true;
//         }
// })

// console.log(foodSchedule);

// let contador = 0;

// for (let index = 0; index < foodSchedule.length; index++) {
//     const food = foodSchedule[index];
//     if (!food.isVegan) {
//         food.name = fruits[contador];
//         food.isVegan = true;
//         contador++

//     }

// }