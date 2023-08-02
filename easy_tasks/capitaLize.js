/* task: Вам дана строка в нижнем регистре. Необходимо вернуть строку, только первая буква которой будет в верхнем регистре. */

function capitaLize(string) {
	return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

capitaLize('string'); // 'String'
capitaLize('qwerty'); // 'Qwerty'