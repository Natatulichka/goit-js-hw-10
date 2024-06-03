import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };
document.addEventListener('DOMContentLoaded', function () {
  let userSelectedDate;
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      const currentDate = new Date();
      if (userSelectedDate < currentDate) {
        iziToast.error({
          title: 'Error',
          message: 'Please choose a date in the future',
        });
        document.getElementById('start-btn').disabled = true;
      } else {
        document.getElementById('start-btn').disabled = false;
      }
    },
  };
  flatpickr('#datetime-picker', options);
  document.getElementById('start-btn').addEventListener('click', function () {
    this.disabled = true;
    document.getElementById('datetime-picker').disabled = true;
    const interval = setInterval(function () {
      const currentDate = new Date();
      const timeDiff = userSelectedDate - currentDate;
      if (timeDiff <= 0) {
        clearInterval(interval);
        iziToast.success({
          title: 'Success',
          message: 'Countdown timer has ended',
        });
        document.getElementById('start-btn').disabled = false;
        document.getElementById('datetime-picker').disabled = false;
      } else {
        const { days, hours, minutes, seconds } = convertMs(timeDiff);
        document.getElementById('timer').innerText = `${addLeadingZero(
          days
        )} Days ${addLeadingZero(hours)} Hours ${addLeadingZero(
          minutes
        )} Minutes ${addLeadingZero(seconds)} Seconds`;
      }
    }, 1000);
  });
});
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
