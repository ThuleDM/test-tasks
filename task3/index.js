const fs = require('fs');
const inputJsonPath = process.argv[2];
const inputDataStr = fs.readFileSync(inputJsonPath, 'utf-8');
const {numberOfKilos} = JSON.parse(inputDataStr);

let kilos = [0.5, 1, 2.5, 4.536, 5, 10, 11.34, 15, 15.88, 20, 20.412, 25]; //sorted array
let multiples = [];

//initialize multiples
for(let i in kilos){
	multiples[i] = 0;
}

let goal = (numberOfKilos - 20) / 2;
let minDelta = 4;

let maxPlates = 12; // per one side

let tempResult = goal*2;
let tempResultMultiples = [];

findResult(kilos, kilos.length-1, multiples, goal+minDelta);
console.log("\n\nOur best result");
showResult(tempResultMultiples, kilos);

fs.writeFileSync("output.json", JSON.stringify({"result" : (tempResult.toFixed(4)*2+20), "multipliers" : tempResultMultiples, kilos}));

function findResult(kilos, indexCurrKilos, multiples, leftKilos){

	if(indexCurrKilos<0){
		return;
	}
	let curKilos = kilos[indexCurrKilos];
	for(let curMultiples = Math.trunc(leftKilos/curKilos);curMultiples>=0;curMultiples--){

		let oldMultiply = multiples[indexCurrKilos];
		multiples[indexCurrKilos] = curMultiples;

		if(sumMultipliers(multiples)>maxPlates){
			multiples[indexCurrKilos] = oldMultiply;
			continue;
		}
		
		let leftKilosCurr = leftKilos - curMultiples*curKilos;
		
		let currResult = calculateResult(multiples, kilos);
		if(tempResult>currResult && currResult> goal){
			tempResult = currResult;
			tempResultMultiples = [...multiples];
		}
	
		findResult(kilos, indexCurrKilos-1, multiples, leftKilosCurr);
		multiples[indexCurrKilos] = oldMultiply;
	}
}

function calculateResult(multiples, kilos){
	let result = 0;
	for(let i = 0; i< multiples.length;i++){
		result+=multiples[i]*kilos[i];
	}
	return result;
}

function sumMultipliers(multiples){
	let result = 0;
	for(let i = 0; i< multiples.length;i++){
		result+=multiples[i];
	}
	return result;
}

function showResult(multiples, kilos){
	
	console.log("result: "+ tempResult.toFixed(4))
	for(let i = 0; i< multiples.length;i++){
		console.log(`${kilos[i]} : ${multiples[i]}`)
	}

}

