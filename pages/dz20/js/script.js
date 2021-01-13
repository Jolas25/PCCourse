 let obj = {
	bread: 25,
	milk: 30,
	chips: 50,
	water: 10,
	cucumbers: 42,
	cucumb:5
}
let sum = 0; 
let max = 0;
let min = 0;

for(let key in obj){
	sum += +obj[key];
	if(obj[key] > max){
		max = obj[key]
		
	}
	 
	if (min < obj[key]) {
		min = obj[key]
		if(obj[key] > min){
			break;
		}
	}
}

console.log('Сумма: ' + sum, 'Максимум: '  + max,'Минимум: ' + min)

