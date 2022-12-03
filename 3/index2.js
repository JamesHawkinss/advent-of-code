const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf8').split('\n');

const priorities = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let sum = 0;

// chunk array into groups of 3
for (let i = 0; i < file.length; i += 3) {
    const chunk = file.slice(i, i + 3);
    
    const badge = chunk.reduce((p, c) => p.split('').filter((x) => c.includes(x)).join(''), chunk[0]);

    sum += priorities.indexOf(badge[0]);
}

console.log(sum);


