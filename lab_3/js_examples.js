function add(a, b) {
  return a + b;
}

function isEven(num) {
  return num % 2 === 0;
}

let count = 0;
function incrementCounter(){
    count++;
    document.getElementById('counter').innerText = count;
}

function askName(){
    let name = prompt('What\'s your name?');
    document.getElementById('name').innerText = 'Welcome ' + name + '!';
}

function startCountdown(){
    let timeLeft = 10;
    let timer = setInterval(function() {
        if (timeLeft <= 0){
            clearInterval(timer);
            document.getElementById('countdown').innerText = 'Time\'s up!';
        }else {
            document.getElementById('countdown').innerText = timeLeft;
        }

        timeLeft--;
    }, 1000);
}

// let fruits = ['apple', 'banana', 'lemon'];
// const list =document.getElementById('fruitList');
// fruits.forEach(function(fruit) {
//     list. += '<li>' + fruit + '</li>';
// });