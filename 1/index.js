const fs = require('fs');
const readline = require('readline');

const stream = fs.createReadStream('input.txt');

const file = readline.createInterface({
  input: stream,
  crlfDelay: Infinity
});

const arr = [];
let index = 0;

file.on('line', (line) => {
    if (line == '') return index++;

    if (!arr[index]) arr[index] = parseInt(line)
    else arr[index] += parseInt(line);
});

file.on('close', () => {
    //console.log(arr.reduce((p, c) => p > c ? p : c, 0));x`

    const stored = arr.sort((a, b) => b - a);
    console.log(stored[0] + stored[1] + stored[2])
})

