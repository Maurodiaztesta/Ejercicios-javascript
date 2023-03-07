const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  

  for (const country of countries) {
    let ul$$ = document.createElement('ul');
    document.body.appendChild(ul$$);
    let div$$ = document.createElement('div');
    ul$$.appendChild(div$$);
    let h4$$ = document.createElement('h4');
    div$$.appendChild(h4$$);
    h4$$.textContent = country.title;
    let img$$ = document.createElement('img');
    div$$.appendChild(img$$);
    img$$.setAttribute("src", country.imgUrl)
    let button$$ = document.createElement('button');
    div$$.appendChild(button$$);
    button$$.textContent = "Remove element";
    button$$.addEventListener("click", deleteIl);
    function deleteIl() {
        ul$$.removeChild(div$$);
    }
  }

  let button$$ = document.querySelector('button');

