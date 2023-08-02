/* Реализуйте функцию, которая принимает в качестве аргумента последовательность и возвращает список элементов без дублей с сохранением исходного порядка элементов. */

/* 1-й вариант */
function uniqueInOrder_V1(iterable) {
	return [...iterable].filter((character, index) => character !== iterable[index + 1]);
}

/* 2-й вариант */
function uniqueInOrder_V2(iterable) {
		const arrCharacter = [];
	
		for(let character = 0; character < iterable.length; character++){
			if(iterable[character] !== iterable[character + 1]){
				arrCharacter.push(iterable[character]);
			}
		}
	
		return arrCharacter;
}

uniqueInOrder_V1('AAAABBBCCDAABBB');  // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder_V1('ABBCcAD'); // ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder_V1([1,2,2,3,3]); // [1,2,3]

uniqueInOrder_V2('AAAABBBCCDAABBB');  // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder_V2('ABBCcAD'); // ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder_V2([1,2,2,3,3]); // [1,2,3]