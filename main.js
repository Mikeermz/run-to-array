const mutant = ["STGCGA", "CAGTGC", "TTATGT", "AGAXGG", "CCCCTA", "TCACTG"];
const noValidLetter = ["DDDDDD","DDDDDD","DDDDDD","DDDDDD","DDDDDD","DDDDDD"];
const noValidNumbers = [111111, 111111, 111111, 111111, 111111, 111111];
const noValid = /^((?!(A|C|T|G)).)*$/;
const regex = /AAAA|TTTT|CCCC|GGGG/;
let data = [];

const createMatrix = (dna) => {
	const aa = dna.map((element) => { 
		console.log('element', element);
		return element
	});
	console.log(aa)
 return [dna]
};

const includeRegex = (dna) => {
	data.push(dna.filter(element => {
		return regex.test(element) === true
	}));
}

const isMutant = (dna) => {
	if (noValid.test(dna)) return 'Caracteres invalidos';

	// newArray = createMatrix(dna).flat()

	includeRegex(dna);
	
	const newDNA = data.flat();

	console.log(newDNA)

	if (newDNA.length >= 2) return true
	return false
}

const mike = isMutant(noValidLetter);
console.log(mike);

// var arrText='';

// 	for (var i = 0; i < mutant.length; i++) {
// 			for (var j = 0; j < mutant[i].length; j++) {
// 					arrText+=mutant[i][j]+' ';
// 			}
// 			console.log(arrText);
// 			arrText='';
// 	}
