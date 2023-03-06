const products = [
    { name: "Gorra de rodilla", sellCount: 10 },
    { name: "Pantalón de pana", sellCount: 302 },
    { name: "Reloj de papel albal", sellCount: 23 },
    { name: "Inpar de zapatos", sellCount: 6 },
  ];
  
  let total = 0;
  let media = 0;
  for (let index = 0; index < products.length; index++) {
      const venta = products[index];
      total += venta.sellCount;
      media = total/4;
  }
  console.log(total);
  console.log(media);