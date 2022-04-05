const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];


let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     if (number % 2 === 0) {
//         total += number;
        
//     }
// }

// for (const number of numbers) {
//     console.log(number);
//     if (number % 2 === 0) {
//         total += number;
//         console.log(`${number} - even`);
//     }
// }


for (const number of numbers) {
    // console.log(number);
    if (number % 2 !== 0) {
        console.log(`Эту итерацию нужно пропустить:`, number)
        continue;
    }
         total += number;
         console.log(`${number} - even`);
}

// console.log(`total:`, total);