const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let cate = [];
for (const peli of movies) {
    for (const categoria of peli.categories) {
        if (!cate.includes(categoria)) {
            cate.push(categoria);
        } 
    }
}
console.log(cate);

