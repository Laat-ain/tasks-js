/* Дана строка. Вам необходимо вернуть строку, каждое слово которой, будет с заглавной буквы */

/* 1-й вариант */
function toJadenCase_V1(string) {
	const strToArr = string.split(' ');
	let newStr = '';
	for(let i=0; i < strToArr.length; i++){
		newStr += strToArr[i].charAt(0).toUpperCase() + strToArr[i].slice(1) + " ";
	}
	return newStr;
}

/* 2-й вариант */
function toJadenCase_V2(string) {
	const arrWords = string.split(' ');
	const upperCaseWordsList = arrWords.map(word => word[0].toUpperCase() + word.slice(1));
	return upperCaseWordsList.join(' ');

}

/* 3-й вариант */
function toJadenCase_V3(string) {
	const arrWords = string.split(' ');
	let result = [];
	arrWords.map(word => result.push(`${word[0].toUpperCase()}${word.slice(1)}`));
	return result.join(" ");
}

toJadenCase_V1("How can mirrors be real if our eyes aren't real");  // "How Can Mirrors Be Real If Our Eyes Aren't Real"
toJadenCase_V2("How can mirrors be real if our eyes aren't real");  // "How Can Mirrors Be Real If Our Eyes Aren't Real"
toJadenCase_V3("How can mirrors be real if our eyes aren't real");  // "How Can Mirrors Be Real If Our Eyes Aren't Real"