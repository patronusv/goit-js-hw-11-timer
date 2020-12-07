// import { refs } from '../refs/refs.js';

export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
    this.timer = document.querySelector(this.selector);
    this.days = this.timer.querySelector('[data-value="days"]');
    this.hours = this.timer.querySelector('[data-value="hours"]');
    this.mins = this.timer.querySelector('[data-value="mins"]');
    this.secs = this.timer.querySelector('[data-value="secs"]');
  }

  start() {
    const targetTime = this.targetDate;
    // const targetTime = new Date(2020, 11, 10, 2, 0, 0);
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetTime - currentTime;
      this.updateTimer(this.getTime(deltaTime));
    }, 1000);    
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  getTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  updateTimer({ days, hours, mins, secs }) {
    console.log(`${days}:${hours}:${mins}:${secs}`);

    // const daysRef = timerRef.querySelector("[(data - value = 'days')]");
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.mins.textContent = `${mins}`;
    this.secs.textContent = `${secs}`;
  }
}
const cyberpunkTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2020, 11, 10, 2, 0, 0),
});
