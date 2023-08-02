/* Функция должна вернуть количество гласных в заданной строке. Мы будем рассматривать буквы a, e, i, o, u как гласные. Входная строка состоит только из строчных букв или пробелов. */

function getCount(str) {
	let count = 0;

	const vowel = ['a', 'e', 'i', 'o', 'u'];
	for(let i=0; i<str.length; i++){
		if(vowel.includes(str.charAt(i))){
			count++;
		}
	}

	return count;
}

getCount("abracadabra"); // 5