/* task: Создайте функцию, которая приветствует основателя компании, либо гостя.*/

function greet(name, owner) {
	return name === owner ? 'Hello boss' : 'Hello guest';
}

greet('Daniel', 'Daniel'); // 'Hello boss'
greet('Greg', 'Daniel'); // 'Hello guest'