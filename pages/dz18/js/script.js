
console.log('-------------------');
	console.log('Сравнение');
	let a = +parseInt(prompt('Первое число'));
    let b = +parseInt(prompt('Второе число'));

	function m1 (a,b) {
       return(Math.max(a,b));
    
}

	console.log(m1(a,b));

console.log('-------------------');
console.log('Заглавная буква');

	let str	= prompt('Введите строку');

	function ucFirst(str) {
		 if (!str) return str;

  	return str[0].toUpperCase() + str.slice(1);
}

	console.log(ucFirst(str));

console.log('-------------------');
console.log('Орел и решка');

let a1 = Math.round(Math.random());
if(a == 0){
	console.log('Решка');
}
else{
	console.log('Орел');
}

console.log('-------------------');
console.log('Два кубика');

let min = 1;
let max = 6;
let number1 = Math.floor(Math.random() * (max - min + 1) + min);
let number2 = Math.floor(Math.random() * (max - min + 1) + min);
console.log('Номер первого кубика: ' + number1, 'Номер второго кубика: ' + number2);


console.log('-------------------');
console.log('Одно число от пользователя');

let min1 = 1;
let max1 = +prompt('Введите макс. значение');
let number = Math.floor(Math.random() * (max1 - min1 + 1) + min1);

console.log(number);

console.log('-------------------');
console.log('Два числа от пользователя. 10 случайных ');

let min2 = +prompt('Введите мин. значение');
let max2 = +prompt('Введите макс. значение');
if(min2 > max2){
	let m = min2;
	min2 = max2;
	max2 = m;
}

for (i = 0; i < 10; i++) {
	let number3 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);
	console.log(number3);

}
	
console.log('-------------------');
console.log('Лотерея');

let l1 = +prompt(' Введите 1-e число для лотереи');
let l2 = +prompt(' Введите 2-e число для лотереи');
let l3 = +prompt(' Введите 3-e число для лотереи');
let l4 = +prompt(' Введите 4-e число для лотереи');
let l5 = +prompt(' Введите 5-e число для лотереи');
let l6 = +prompt(' Введите 6-e число для лотереи');

console.log('Числа что вы ввели: ' + l1, l2, l3, l4, l5, l6);

let min5 = 1;
let max5 = 36;
let number5;
for (i = 0; i < 6; i++) {
	let number5 = Math.floor(Math.random() * (max5 - min5 + 1) + min5);
	console.log(number5);
}

if (l1 == number5){
	console.log('совпало число: ' + number5);
}
if (l2 == number5){
	console.log('совпало число: ' + number5);
}
if (l3 == number5){
	console.log('совпало число: ' + number5);
}
if (l4 == number5){
	console.log('совпало число: ' + number5);
}
if (l5 == number5){
	console.log('совпало число: ' + number5);
}
if (l6 == number5){
	console.log('совпало число: ' + number5);
}


