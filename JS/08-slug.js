const title = `Top 10 benefits of React framework`;
const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

const words = normalizedTitle.split(` `);
// console.log(words);

const slug = words.join(`-`)
// console.log(slug);

const slug1 = title.toLowerCase().split(` `).join(`-`); // split and join вызиваеться на результате предидущего toLowerCase
console.log(slug1)