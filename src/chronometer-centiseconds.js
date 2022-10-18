class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (printTimeCallback) {
      this.intervalId = setInterval(() => {
        printTimeCallback();
        this.currentTime += 1;
      }, 10);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 10);
    }
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor((this.currentTime / 100) % 60);
    return seconds;
  }

  getCentiseconds() {
    let centiseconds = this.currentTime % 100;
    return centiseconds;
  }

  computeTwoDigitNumber(value) {
    let stringValue = String(value);
    return stringValue.padStart(2, "0");
  }

  stop() {
    clearInterval(this.intervalId);
    console.log("stop");
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
