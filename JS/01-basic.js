const friends = [`Mango`, `Friend`, `Orange`, `Air`, `Poly`,`Mango`, `Friend`, `Orange`, `Air`, `Poly`];


// --------- for и (for...of) -------------- //

// for (let i = 0; i <= friends.length - 1; i += 1){
//     console.log(friends[i]) // Обращение к каждому элементу массива
// }

// for (let i = 0; i <= friends.length - 1; i += 1){
//     friends[i] += `-2`;
// }

// console.table(friends);

for (let variable of friends) { 
    console.log(variable); // for...of используеться там, где не нужен индекс
}


// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex)

// console.log(friends[friends.length - 1]);

// friends[0] = `qweqwe`;
// console.table(friends);

// let a = 10;
// let b = a;  // это копия

// console.log(a);
// console.log(b);

// a = 200;

// console.log(a);
// console.log(b); // значение копии не меняеться


// const a = [1, 2, 3]; //  'a' это ссылка на место в памяти, где храниться массив
// const b = a;

// console.log(a);
// console.log(b);

// a.push(4);

// console.log(a);
// console.log(b);

// a[0] = 23;

// console.log(a);
// console.log(b);

// console.log([1, 2, 3] === [1, 2, 3]) //false сравниваються места в памяти, а не сами массивы



