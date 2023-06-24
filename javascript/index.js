const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  const min = printMinutes();
  const sec = printSeconds();

  minDecElement.innerHTML = min[0];
  minUniElement.innerHTML = min[1];
  secDecElement.innerHTML = sec[0];
  secUniElement.innerHTML = sec[1];

  const mil = printMilliseconds();
  milDecElement.innerHTML = mil[0];
  milUniElement.innerHTML = mil[1];
}

function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
}

function printSplit() {
  const newSplit = document.createElement('li');
  newSplit.innerHTML = chronometer.split();
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
}

function setStopBtn() {
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList[1] === 'start') {
    chronometer.start(printTime);

    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();

    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList[1] === 'split') printSplit();
  if (btnRightElement.classList[1] === 'reset') {
    chronometer.reset();
    printTime();

    clearSplits();
  }
});
