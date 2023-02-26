let a = '';
let b = '';
let num = '';
let ans = false;

let out;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', 'x', '+', '/'];

function clearAll () {
  if (!out) {
    out = document.querySelector('.calcScreen h2');
  }

  a = '';
  b = '';
  num = '';
  ans = false;
  out.textContent = 0;
}

function onButtonClick(event) {
  if (!out) {
    out = document.querySelector('.calcScreen h2');
  }

  if (!event.target.classList.contains('btn')) {
    return;
  }

  if (event.target.classList.contains('ac')) {
    return;
  }

  const key = event.target.textContent;
  if (digit.includes(key)) {
    if (b === '' && num === '') {
      a += key;
      out.textContent = a;
      return;
    }

    if (a !== '' && b !== '' && ans) {
      b = key;
      ans = false;
    } else {
      b += key;
    }

    out.textContent = b;
    console.log(a, num, b);
    return;
  }

  if (action.includes(key)) {
    num = key;
    out.textContent = num;
    console.log(num);

    return;
  }

  if (key === '=') {
    if (b === '') {
      b = a;
    }

    switch (num) {
      case '+':
        a = Number(a) + Number(b);
        break;

      case 'x':
        a = a * b;
        break;

      case '/':
        if (parseInt(b) === 0) {
          out.textContent = 'Ошибка';
          a = '';
          b = '';
          num = '';
          return;
        }

        a = a / b;
        break;

      case "-":
        a = a - b;
        break;          
    }
      
    ans = true;
    out.textContent = a;
  }

  switch (key) {
    case '+/-':
      a = -a;
      out.textContent = a;
      break;

    case '<':
      a = out.textContent.slice(0, -1);
      b = out.textContent.slice(0, -1);

      out.textContent = out.textContent.slice(0, -1);
      break;

    case '%':
      a = a / 100;
      out.textContent = a;
  }
}





// function sendNum(digit) {
//     a += digit;
//     document.getElementById('screen').innerText = a.split('').reverse().join('');
// }

// function equalTo() {
//     document.getElementById('screen').innerText = '';

//     for (let i = 0; i < num.length; i++) {
//         b += num[i];
//     }

//     ans = eval(b);
//     document.getElementById('screen').innerText = ans;

//     while (num.length > 0) {
//         num.pop();
//     }
//     num.push(ans.toString());
// }

// function clearSrc() {
//     document.getElementById('screen').innerText = '';
//     oute
// }