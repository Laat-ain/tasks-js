function cookie_V1(x) {
	return `Who ate the last cookie? It was ${({string: "Zach", number: "Monica"}[typeof x] || "the dog")}!`;
}

function cookie_V2(x) {
	return `Who ate the last cookie? It was ${ (typeof x === 'string') ? 'Zach' : (typeof x === 'number') ? 'Monica' : 'the dog' }!`;
}

cookie_V1('bbb');
cookie_V1(4);
cookie_V1(undefined);

cookie_V2('bbb');
cookie_V2(4);
cookie_V2(undefined);