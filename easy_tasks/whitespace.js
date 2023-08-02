/* task: Напишите функцию, которая будет добавлять пробел перед символом в строке в верхнем регистре. */

function solution(string) {
	let newStr = '';
	let count = 0;

	do {
		// если не первый элемент и символ в toUpperCase, с помощью шаблонной строки, добавляем 'пробел' перед символом 
		if(string.charAt(count) === string.charAt(count).toUpperCase() && count !== 0){
			newStr += ` ${string.charAt(count)}`; 
		}
		else{
			newStr += string.charAt(count);
		}
	} while (count++ <string.length);

	return newStr;
}

solution("camelCasing"); // "camel Casing"