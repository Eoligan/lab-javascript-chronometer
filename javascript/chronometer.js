class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    console.log('detenido');
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

const chrono = new Chronometer();
chrono.currentTime = 65;
console.log(chrono.computeTwoDigitNumber(chrono.getMinutes()));
console.log(chrono.computeTwoDigitNumber(chrono.getSeconds()));
console.log(chrono.split());
