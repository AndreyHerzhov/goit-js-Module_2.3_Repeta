const cart = [1, 1, 4 ];
let total = 0;
// for (let i = 0; i < cart.length; i += 1){
//     console.log(cart[i]);
//     total += cart[i];
// }

// for (const value of cart) {
//     total += value;
// }

for (let i = 0; i <= cart.length; i += 1){
    cart[i] = Math.round(cart[i] * 1.1);

}

console.log(`total:`, total)
