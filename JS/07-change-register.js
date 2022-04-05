const string = `QWEQWEQWqewqeqew`;
const letters = string.split(``);
let invertedString = ``;

// console.log(letters);

for (const letter of letters) {
    // console.log(letter)
    // if (letter === letter.toLowerCase()) {
    //     // console.log(`Эта буква в нижнем регистре`);
    //     invertedString += letter.toUpperCase();
    // } else {
    //     invertedString += letter.toLowerCase();
    // }

    const isEquel = letter === letter.toLowerCase();
     invertedString += isEquel
        ? letter.toUpperCase()
        : letter.toLowerCase();
}

console.log(`invertedString:`, invertedString);