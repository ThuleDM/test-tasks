const fs = require('fs');
const inputJsonPath = process.argv[2];
const inputDataStr = fs.readFileSync(inputJsonPath, 'utf-8');
const {arr} = JSON.parse(inputDataStr);

let map = new Map();
let repetitiveElements = [];

arr.forEach(function(element){
    let repeatNumber = 1;
    if(map.has(element)){
        repeatNumber += map.get(element);
        console.log(`Repetitive elements : ${element}`);
        repetitiveElements.push(element);
    }

    map.set(element, repeatNumber);
})

fs.writeFileSync("output.json", JSON.stringify({repetitiveElements}));