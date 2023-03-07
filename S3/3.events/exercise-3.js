let eventoInput$$ = document.querySelector("input");
function eInput() {
    console.log(eventoInput$$.value);
}
eventoInput$$.addEventListener("input", eInput);