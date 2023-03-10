const baseUrl = 'https://api.nationalize.io?name=';

const buscar = () => {
    const input$$ = document.querySelector('input');

    fetch(baseUrl + input$$.value)
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
    });
};

const button$$ = document.querySelector('button');
button$$.addEventListener("click", buscar);
