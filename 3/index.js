const fs = require('fs');
const readline = require('readline');

const stream = fs.createReadStream('input.txt');

const file = readline.createInterface({
  input: stream,
  crlfDelay: Infinity
});

const priorities = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let sum = 0;

file.on('line', (line) => {
    const comp1 = line.substring(0, line.length / 2).split('');
    const comp2 = line.substring(line.length / 2).split('');

    const duplicate = comp1.find((c) => comp2.includes(c));

    sum += priorities.indexOf(duplicate);
});

file.on('close', () => console.log(sum))
