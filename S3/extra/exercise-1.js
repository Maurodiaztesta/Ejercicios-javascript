const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul$$ = document.createElement('ul');
document.body.appendChild(ul$$);
for (let i = 0; i < countries.length; i++) {
    let li$$ = document.createElement('li');
    ul$$.appendChild(li$$);
    li$$.textContent = countries[i];
}