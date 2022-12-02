const fs = require('fs');
const readline = require('readline');

const stream = fs.createReadStream('input.txt');

const file = readline.createInterface({
  input: stream,
  crlfDelay: Infinity
});

const calculateAction = (opp, outcome) => {
    if (outcome == 'Y') { // draw
        return opp;
    }

    if (outcome == 'Z') { // win
        return lose[opp]
    }
    
    if (outcome == 'X') { // lose
        return win[opp];
    }
}

const win = {
    "A": "C",
    "B": "A",
    "C": "B"
}

const lose = {
    "A": "B",
    "B": "C",
    "C": "A"
}

const scores = {
    "A": 1,
    "B": 2,
    "C": 3,
}

let score = 0;

file.on('line', (line) => {
    let [opp, outcome] = line.split(' ');

    const action = calculateAction(opp, outcome);

    score += scores[action];

    // win
    if (outcome == 'Z') {
        score += 6;
    };

    // draw
    if (outcome == 'Y') {
        score += 3;
    }

    // lose - no extra score
});

file.on('close', () => {
    console.log(score);
})