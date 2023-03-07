let button$$ = document.createElement("button");
button$$.setAttribute("id", "btnToClick");
document.body.appendChild(button$$);
let select$$ = document.querySelector("#btnToClick");
function fClick(e){
    console.log(e);
}
select$$.addEventListener("click", fClick)