/* task: Напишите программу, которая находит сумму всех чисел от 1 до num. 
Известно, то число всегда будет положительным целым числом больше 0. */

// 1-й вариант
function summation_V1 (num) {
	let sum = 0;

	do {
		sum += num;
	} while (num-- > 0);

	return sum;
}

// 2-й вариант
function summation_V2 (num) {
	return (1 + num)/2 * num;
}

summation_V1(1); // 1
summation_V1(2); // 3
summation_V1(8); // 36

summation_V2(1); // 1
summation_V2(2); // 3
summation_V2(8); // 36
