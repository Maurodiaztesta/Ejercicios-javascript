const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
  

  
  
  
  const input$$ = document.querySelector('input');
  const button$$ = document.querySelector('button');

  
  button$$.addEventListener("click", function() {
    console.log(input$$.value);
  
      const letras = streamers.filter((streamer) => {
          if (streamer.name.toLowerCase().includes(input$$.value.toLowerCase())) {
              return streamer
          }
      });
      console.log(letras);
  })
  

