const fs = require('fs');
const inputJsonPath = process.argv[2];
const inputDataStr = fs.readFileSync(inputJsonPath, 'utf-8');
const {initialNumber, targetNumber} = JSON.parse(inputDataStr); 

let resutSteps = [];
let isPossible = findIfFirstNumCanTransformToSecond(initialNumber, targetNumber, resutSteps);
console.log(isPossible, resutSteps);

fs.writeFileSync("output.json", JSON.stringify({isPossible, resutSteps}));

function findIfFirstNumCanTransformToSecond(initialNumber, targetNumber, resutSteps){

    if(targetNumber.toString() === initialNumber.toString()){
        return true;
    }

    if(initialNumber > targetNumber){
        return false;
    }

    if(targetNumber.toString().slice(-1) !== "1"){ 
        if(targetNumber%2 === 0){
            console.log(targetNumber);
            targetNumber = targetNumber / 2;
            resutSteps.push('divide: '+targetNumber + ";" + initialNumber);
            return findIfFirstNumCanTransformToSecond(initialNumber, targetNumber ,resutSteps);
        }else{
            return false;
        }
    }else{
        let subTargetNumber = truncateRepeatableSymbolFromEnd(targetNumber, "1" );

        if(subTargetNumber > initialNumber) {
            targetNumber = subTargetNumber;
            resutSteps.push('truncate:' +targetNumber + ";" + initialNumber );
        }else{
            initialNumber += "1";
            resutSteps.push('append:'+ targetNumber );
        }
        
        return findIfFirstNumCanTransformToSecond(initialNumber, targetNumber, resutSteps);

    }

}

function truncateRepeatableSymbolFromEnd (value, symbol) {
    let countUnits = 0;
    for(let i = value.toString().length-1; i >= 0; i--){
        if(value.toString()[i] === symbol){
            countUnits++;
        }else{
            break;
        }
    }

    return value.toString().substring(0, value.toString().length-countUnits);
}
