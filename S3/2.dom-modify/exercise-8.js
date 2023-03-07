let p$$ = document.createElement("p");
p$$.textContent = "Voy en medio!";
let div$$ = document.querySelectorAll("div");
for (let i = 0; i < div$$.length; i++) {
    document.body.insertBefore(p$$, div$$[i])
}




