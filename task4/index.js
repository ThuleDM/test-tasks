const fs = require('fs');
const inputJsonPath = process.argv[2];
const inputDataStr = fs.readFileSync(inputJsonPath, 'utf-8');
const {width, height, positionsOfActors} = JSON.parse(inputDataStr);

let lightingPosition = [];

let stage = new Array(width);
for (let i = 0; i < width; i++) {
    stage[i] = new Array(height);        
}

for(let i = 0; i < width; i++){
    for(let j = 0; j < height; j++){
        stage[i][j] = 0;
    }
}

for(let i = 0; i < positionsOfActors.length; i++){
    let position =  positionsOfActors[i];
    stage[position["x"]][position["y"]] = 1;
}

for(let i = 0; i < width; i++){
    for(let j = 0; j < height; j++){
        if(stage[i][j] !== 0){
            if(stage[i][j-1] === 0 ){
                lightingPosition.push({"x" : i, "y" : j-1, "direction" : "right"});
            }
            if( stage[i-1] && stage[i-1][j] === 0){
                lightingPosition.push({"x" : i-1, "y" : j, "direction" : "down"});
            }
            if(stage[i][j+1] === 0){
                lightingPosition.push({"x" : i, "y" : j+1, "direction" : "left"});
            }
            if(stage[i+1] && stage[i+1][j] === 0){
                lightingPosition.push({"x" : i+1, "y" : j, "direction" : "up"});
            }
        }
    }
}

fs.writeFileSync("output.json", JSON.stringify({lightingPosition}));

console.log(lightingPosition);
console.log(stage);