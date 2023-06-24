class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentTimeMs = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTimeMs++;
      if (typeof callback === 'function') {
        callback();
      }
      if (this.currentTimeMs % 100 === 99) {
        this.currentTime++;
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return this.currentTimeMs;
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentTimeMs = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}:${this.computeTwoDigitNumber(this.getMilliseconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

// const chrono = new Chronometer();
// chrono.currentTime = 65;
// console.log(chrono.computeTwoDigitNumber(chrono.getMinutes()));
// console.log(chrono.computeTwoDigitNumber(chrono.getSeconds()));
// console.log(chrono.split());
