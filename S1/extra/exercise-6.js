const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];
for (let index = 0; index < products.length; index++) {
    const ventas = products[index];
    if (ventas.sellCount > 20) {
        goodProducts.push(ventas);
    } else {
        badProducts.push(ventas);
    }
}
console.log(goodProducts);
console.log(badProducts);