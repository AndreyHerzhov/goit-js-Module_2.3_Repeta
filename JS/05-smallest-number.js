const numbers = [51, 18, 13, 24, 7, 85, 19];

let biggestNumber = numbers[0];

// console.log(smallestNumber);

for (const number of numbers) {
    // console.log(number);

    if (number > biggestNumber) {
        biggestNumber = number;

    }
}

        console.log(`biggestNumber:`, biggestNumber);