// homework part 1

let name = prompt('What is your name?');
let age = prompt ('How old are you?');
let country = prompt ('Where are you from?');

alert(`Hello: ${name} ${age} ${country}`);


//homework part 2

let number = prompt ('Enter five-digit number');
let digits = number.toString().split('');

alert(digits.join(' '));
