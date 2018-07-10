const keys = document.querySelectorAll('input')
const screen = document.querySelector('.display');
const result = document.querySelector('.blue');

// array to store the input values
let storedVal = '';

// populate the screen
keys.forEach(key => key.addEventListener('click', display))

function display() {

  if(this.value.match(/\d/) || this.value == '+' || this.value == '-') {
    storedVal += this.value;
  }

  //convert operands
  if(this.value == 'x') {
    storedVal += '*'
  }
  if(this.value == '÷') {
    storedVal += '/'
  }

  //disable double dot
  if(this.value == '.') {
    if(storedVal.slice(-1) != '.') {
      storedVal += '.'
    }
  }

  //reset
  if(this.value == 'ac') {
    storedVal = '';
  }
  
  //if empty show 0
  if(storedVal == ''){
    screen.textContent = 0;
  } else {
    screen.textContent = storedVal;
  }
}

// give result when pressing '='
result.addEventListener('click', getTotal)

function getTotal() {
  storedVal = eval(storedVal);
  screen.textContent = storedVal;
}

//keyboard support
document.addEventListener('keydown', keyCheck)

function keyCheck() {
  if(event.key.match(/[\d\+*\-\/]/)) {
    storedVal += event.key;
    screen.textContent = storedVal;
  }
  //backspace
  if(event.which == 8) {
    storedVal = storedVal.slice(0, -1);
    if(storedVal == ''){
      screen.textContent = 0;
    } else {
      screen.textContent = storedVal;
    }
  }
  //del
  if(event.which == 46) {
    storedVal = '';
    screen.textContent = storedVal;
    if(storedVal == ''){
      screen.textContent = 0;
    }
  }
  //equal
  if(event.which == 48 || event.which == 13) {
    getTotal();
  }
}