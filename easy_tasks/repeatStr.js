/* Функция принимает целое число и строку в качестве параметров. Необходимо вернуть строку, повторяющуюся n количество раз. */

/* 1-й вариант */
function repeatStr_V1(number, string) {
	return string.repeat(number)
}

/* 2-й вариант */
function repeatStr_V2(number, string) {
	let str = "";

	for(let num = 0; num < number; num++){
		str += string;
	}

	return str;
}

/* 3-й вариант */
function repeatStr_V3(number, string) {
	let result = "";
	while(number-- > 0) result += string;
	return result;
}

repeatStr_V1(6, 'I'); // "IIIIII"
repeatStr_V2(5, "Hello"); // "HelloHelloHelloHelloHello"

repeatStr_V2(6, 'I'); // "IIIIII"
repeatStr_V2(5, "Hello"); // "HelloHelloHelloHelloHello"

repeatStr_V3(6, 'I'); // "IIIIII"
repeatStr_V3(5, "Hello"); // "HelloHelloHelloHelloHello"