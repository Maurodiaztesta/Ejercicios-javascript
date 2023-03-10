fetch('https://api.agify.io?name=michael')
    .then((response) => response.json())
    .then((responsejson) => {
        console.log(responsejson);
    })



// const get = async () => {
//     try {
//         const respuesta = await fetch('https://api.agify.io?name=michael');
//         const res = respuesta.json();
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

