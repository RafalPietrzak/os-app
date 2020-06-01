const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Jan', 'Zbigniew', 'Florian', 'Antoni', 'Bernard', 'Krzysztof'];
const femaleNames = ['Anna', 'Katarzyna', 'Dorota', 'Genowefa', 'Aleksandra'];
const secondNames = ['Grzyb', 'Mysz', 'Fasola', 'Konar', 'Wieprz'];
const people = [];
function randomChoice(dataArray){
  return dataArray[Math.floor(Math.random() * (dataArray.length))]; 
}
for(let i = 0; i <20; i++){
  const person = {
    gender: randomChoice(genders),
    age: Math.floor(Math.random() * 61) + 18,
    lastName: randomChoice(secondNames),
  };
  person.firstName = person.gender === 'M' 
    ? randomChoice(maleNames) 
    : randomChoice(femaleNames);
  people.push(person);
}
fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});