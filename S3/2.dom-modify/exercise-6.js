const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$$ = document.createElement("ul");
document.body.appendChild(ul$$);
for (let index = 0; index < apps.length; index++) {
    let li$$ = document.createElement("li");
    ul$$.appendChild(li$$);
    li$$.textContent = apps[index]; 
}
