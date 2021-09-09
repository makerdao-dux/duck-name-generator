const species = require('./species.json');

const names = require('./names.json');

function getRandomItemFromArray(items) {
    return  items[Math.floor(Math.random()*items.length)];
}

const item = getRandomItemFromArray(species)
const name = getRandomItemFromArray(names)

console.log(`${name} ${item.name} - ${item.scientificName}`)