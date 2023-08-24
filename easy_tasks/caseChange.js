/* Дана строка. Необходимо написать функцию, которая переключает каждую букву в строке с верхней на нижнюю и с нижней на верхнюю. */

function alternateCase(string) {
	return string.split('').map(char => `${(char !== char.toUpperCase()) ? char.toUpperCase() : char.toLowerCase() }`).join("");
}

alternateCase("qwerty"); // 'QWERTY'
alternateCase("QWERTY"); // 'qwerty
alternateCase("QwErTy"); // 'qWeRtY
