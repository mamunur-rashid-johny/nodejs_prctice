const fs = require('fs');


// const book = {
//   title:'Ego is the Enemy',
//   author:'Ryan Holiday'
// }
// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.title);
// console.log(data.author);

const dataBuffer = fs.readFileSync('data.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
data.name = "Johny"
data.age = 30

fs.writeFileSync('data.json',JSON.stringify(data))
