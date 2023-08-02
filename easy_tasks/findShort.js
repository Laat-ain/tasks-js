/* Дана строка слов. Необходимо вернуть длину самого короткого слова. */

/* 1-й вариант */
function findShort_V1(message) {
	const characterLists = message.split(' ');
	let smallest = characterLists[0];

	for(let i=1; i<characterLists.length; i++){
		if(smallest.length > characterLists[i].length){
			smallest = characterLists[i];
		}
	}

	return smallest.length;
}

/* 2-й вариант */
function findShort_V2(message) {
	return message.split(' ').sort(function(a, b){
		return b.length - a.length;
	}).pop().length;
}

/* 3-й вариант */
function findShort_V3(message) {
	return message.split(' ').sort(function(a, b){
		return a.length - b.length;
	}).shift().length;
}

/* 4-й вариант */
function findShort_V4(message) {
	const arrNumb = message.split(' ').map(e => e.length);
	return Math.min(...arrNumb);
}

findShort_V1("bitcoin take over the world maybe who knows perhaps"); // 3
findShort_V1("Let's travel abroad shall we"); // 2

findShort_V2("bitcoin take over the world maybe who knows perhaps"); // 3
findShort_V2("Let's travel abroad shall we"); // 2

findShort_V3("bitcoin take over the world maybe who knows perhaps"); // 3
findShort_V3("Let's travel abroad shall we"); // 2

findShort_V4("bitcoin take over the world maybe who knows perhaps"); // 3
findShort_V4("Let's travel abroad shall we"); // 2

