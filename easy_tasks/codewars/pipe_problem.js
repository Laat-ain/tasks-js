function pipeFix(numbers){
	const newMas = [];
	for(let i = numbers.at(0); i <= numbers.at(-1); i++){
		newMas.push(i);
	}

	return newMas;
}

pipeFix([1,2,3,5,6,8,9]);