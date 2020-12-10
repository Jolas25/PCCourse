
function fib(n) {
  let a = 1;
    b = 1;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;} // я так понимаю - каждое второе число(b) принимает занчение temp = a + b и перезаписывается в начало
             // а число а принимает его значение на следующем цикле.
 
console.log( fib(3), fib(4), fib(5), fib(6), fib(7), fib(8), fib(9), fib(10), fib(11), fib(12), fib(13), fib(14), fib(15), fib(16), fib(17), fib(18), fib(19), fib(20), fib(21), fib(22), fib(23), fib(24), fib(25) );


let name = prompt('Логин')
let pass;
switch(name){
	case 'admin':
		let pass = prompt('Пароль');
		switch(pass){ 
			case 'admin':
			alert('Добро пожаловать');
			break;
			case null:
			alert('Вход отменен');
			break;
			default:
			alert('Пароль не верный');
			break;
			}
		break;
	case null:
		alert('Вход отменен');
		break;
	default:
		alert('Я вас не знаю');
		break;
}



var i, x = 0;
for (i = 1; i <= 100; i++) {
	x += i;
	console.log(x) }
