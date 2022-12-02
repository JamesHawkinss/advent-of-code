const fs = require('fs');
const readline = require('readline');

const stream = fs.createReadStream('input.txt');

const file = readline.createInterface({
  input: stream,
  crlfDelay: Infinity
});

const win = {
    "Z": "B",
    "X": "C",
    "Y": "A"
}

const draw = {
    "A": "X",
    "B": "Y",
    "C": "Z"
}

const scores = {
    "X": 1,
    "Y": 2,
    "Z": 3
}

let score = 0;

file.on('line', (line) => {
    const [opp, you] = line.split(' ');

    score += scores[you];

    // win
    if (win[you] == opp) {
        score += 6;
    };

    // draw
    if (draw[opp] == you) {
        score += 3;
    }

    // lose - no extra score
});

file.on('close', () => {
    console.log(score);
})