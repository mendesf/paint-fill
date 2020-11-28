const paint = require('./paint');

const draw = [
    [].concat(new Array(10).fill(0, 0, 5).fill(2, 5), new Array(10).fill(0, 0, 5).fill(2, 5)),
    [].concat(new Array(10).fill(0, 0, 5).fill(2, 5), new Array(10).fill(0, 0, 5).fill(2, 5)),
    [].concat(new Array(10).fill(0, 0, 2).fill(1, 2, 5).fill(2, 5), new Array(10).fill(0, 0, 2).fill(1, 2, 5).fill(2, 5)),
    [].concat(new Array(10).fill(0, 0, 2).fill(1, 2, 5).fill(2, 5), new Array(10).fill(0, 0, 2).fill(1, 2, 5).fill(2, 5)),
    [].concat(new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8), new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8)),
    [].concat(new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8), new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8)),
    [].concat(new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8), new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8)),
    [].concat(new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8), new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8)),
    [].concat(new Array(10).fill(0), new Array(10).fill(0)),
    [].concat(new Array(10).fill(0), new Array(10).fill(0)),
    [].concat(new Array(10).fill(0, 0, 5).fill(2, 5), new Array(10).fill(0, 0, 5).fill(2, 5)),
    [].concat(new Array(10).fill(0, 0, 5).fill(2, 5), new Array(10).fill(0, 0, 5).fill(2, 5)),
    [].concat(new Array(10).fill(0, 0, 2).fill(1, 2, 5).fill(2, 5), new Array(10).fill(0, 0, 2).fill(1, 2, 5).fill(2, 5)),
    [].concat(new Array(10).fill(0, 0, 2).fill(1, 2, 5).fill(2, 5), new Array(10).fill(0, 0, 2).fill(1, 2, 5).fill(2, 5)),
    [].concat(new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8), new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8)),
    [].concat(new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8), new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8)),
    [].concat(new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8), new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8)),
    [].concat(new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8), new Array(10).fill(0, 0, 2).fill(1, 2, 8).fill(0, 8)),
    [].concat(new Array(10).fill(0), new Array(10).fill(0)),
    [].concat(new Array(10).fill(0), new Array(10).fill(0)),
];

const drawA = draw.map(p => [].concat(p));
console.table(drawA);
paint(drawA, 15, 11, 3);
console.table(drawA);

const drawB = draw.map(p => [].concat(p));
console.table(drawB);
paint(drawB, 0, 0, 3);
console.table(drawB);
