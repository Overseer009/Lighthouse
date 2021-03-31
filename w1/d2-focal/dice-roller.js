
const dieCaster = process.argv.slice(2)

let diceRoll = [];
for (i = 0; i < dieCaster[0]; i++) {
  const randomNumber = Math.round(1 + Math.random() * 5)
  diceRoll.push(randomNumber);
}
console.log(`Rolled ${dieCaster} dice: ${diceRoll.join()}`)
