let inputFocus$$ = document.querySelector("input");
function fFocus() {
    console.log(inputFocus$$.value);
}
inputFocus$$.addEventListener("focus", fFocus);