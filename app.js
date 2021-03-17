const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `translateX(100%) rotate(${hoursDegrees}deg)`;

  setTransitions(seconds, mins, hours);
}

function setTransitions(seconds, mins, hours) {
  // transitions are set in JavaScript instead of CSS
  //   so when the hand reaches 0, it doesn't transition all the way
  //   around and look very unlike a clock.

  if (seconds == 0) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = 'all 0.05s';
  }

  if (mins == 0) {
    minsHand.style.transition = 'none';
  } else {
    minsHand.style.transition = 'all 0.05s';
  }

  if (hours == 0) {
    hourHand.style.transition = 'none';
  } else {
    hourHand.style.transition = 'all 0.05s';
  }
}

setInterval(setDate, 1000);
