const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let atriv$$ = document.querySelector('[data-function="printHere"]');
let ul$$ = document.createElement('ul');
atriv$$.appendChild(ul$$);
for (let i = 0; i < cars.length; i++) {
    let li$$ = document.createElement('li');
    ul$$.appendChild(li$$);
    li$$.textContent = cars[i];
    
}