const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf8').split('\n');

let sum = 0;

file.forEach((line) => {
    const [b1, b2] = line.split(',');

    const [b1min, b1max] = b1.split('-');
    const s1 = Array.from({ length: b1max - b1min + 1 }, (_, i) => i + parseInt(b1min));

    const [b2min, b2max] = b2.split('-');
    const s2 = Array.from({ length: b2max - b2min + 1 }, (_, i) => i + parseInt(b2min));

    // const s1contains = s1.every(element => {
    //     return s2.includes(element);
    // });

    // const s2contains = s2.every(element => {
    //     return s1.includes(element);
    // });
    
    // if (s1contains || s2contains) {
    //     sum++;
    // }

    const s1contains = s1.findIndex(element => {
        return s2.includes(element);
    });

    const s2contains = s2.findIndex(element => {
        return s1.includes(element);
    });

    if (s1contains !== -1 || s2contains !== -1) {
        sum++;
    }
});

console.log(sum);