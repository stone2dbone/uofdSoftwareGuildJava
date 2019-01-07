//max number
//version 1
var maxNumber = 0;
var numbers = [5,119,23,4,-1,68];

function findMax(numbers){
	for (var i=0; i < numbers.length; i++){
		if(numbers[i] > maxNumber){
			maxNumber = numbers[i];
		}
	}
	
	return maxNumber;
}

console.log(findMax(numbers));