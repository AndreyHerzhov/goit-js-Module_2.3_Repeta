const array1 = [5, 10, 15, 20]
const array2 = [10, 20, 30];
const array3 = [10, 20, 30];
const array4 = [10, 20, 30];

let total = 0;

// for (const number1 of array1) {
//     total += number1;
// }

// for (const number2 of array2) {
//     total += number2
// }
// console.log(total)

const numbers = array1.concat(array2,array3,array4);// concat не деструктивный метод

for (const number of numbers) {
    total += number;
}


console.log(numbers)
console.log(total)