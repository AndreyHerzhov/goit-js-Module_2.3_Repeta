const cards = [
    `Карточка-1`,
    `Карточка-2`,
    `Карточка-3`,
    
    
]

// const cardToRemove = `Карточка-3`;
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1) // удаляет одну карточку под этим индексом
// console.log(`index:`, index);

// console.log(cards.splice(0, 4));

// const cardToInsert = `Карточка-18`;
// const index = 3;
// cards.splice(index, 0, cardToInsert,); // splice вставляет  элементы cardToInsert на место индекса

// cards.push(cardToInsert);

const cardToUpdate = `Карточка-4`;
cards.splice(2,1,cardToUpdate) // заменяет карточку под индексом 2 на карточку cardToUpdate 

console.table(cards)
