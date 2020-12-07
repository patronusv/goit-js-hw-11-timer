import './styles.css';
import { CountdownTimer } from './components/timer.js';
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2020, 11, 10, 2, 0, 0),
});
