/* task: На вход принимается строка. Вы должны вернуть строку, в которой каждый символ (с учетом регистра) будет продублирован один раз. */

// 1-й вариант
function doubleChar_V1(str) {
	let num = 0;
	let newStr = '';

	//пока условие верно(как минимум 1 раз), записываем через шаблонные строки удвоенный символ
	do {
		newStr += `${str.charAt(num)+str.charAt(num)}`; 
	} while (num++ < str.length);

	return newStr;
}

// 2-й вариант
function doubleChar_V2(str) {
	const strToArr = str.split(''); // строка в массив
	let newStr = '';
	
	// используем метод .map + функцию-колбэка
	strToArr.map(char => newStr += `${char+char}`); // вызывается каждый элемент массива и в новую строку, записывается удвоенный элемент
	return newStr;
}

doubleChar_V1('abcd'); // "aabbccdd" 
doubleChar_V1("Hello World"); // "HHeelllloo  WWoorrlldd"
doubleChar_V1("1234!_");// "11223344!!__"

doubleChar_V2('abcd');
doubleChar_V2("Hello World");
doubleChar_V2("1234!_"); 

