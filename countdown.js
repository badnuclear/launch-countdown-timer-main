const date = "2022 May 05";

const countTime = (endtime) => {
  const totalTime = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((totalTime / 1000) % 60);
  const minutes = Math.floor((totalTime / 1000 / 60) % 60);
  const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));

  return {
    seconds,
    minutes,
    hours,
    days,
    totalTime,
  };
};

function Clock(sec, min, hour, day, endtime) {
  const daysLeft = document.querySelector(day);
  const hoursLeft = document.querySelector(hour);
  const minsLeft = document.querySelector(min);
  const secsLeft = document.querySelector(sec);
  const timesInterval = setInterval(() => {
    const timeRemaining = countTime(endtime);

    timeRemaining.days < 10
      ? (daysLeft.innerHTML = `0${timeRemaining.days}`)
      : (daysLeft.innerHTML = `${timeRemaining.days} `);

    timeRemaining.hours < 10
      ? (hoursLeft.innerHTML = `0${timeRemaining.hours}`)
      : (hoursLeft.innerHTML = `${timeRemaining.hours}`);

    timeRemaining.minutes < 10
      ? (minsLeft.innerHTML = `0${timeRemaining.minutes}`)
      : (minsLeft.innerHTML = `${timeRemaining.minutes}`);

    timeRemaining.seconds < 10
      ? (secsLeft.innerHTML = `0${timeRemaining.seconds} `)
      : (secsLeft.innerHTML = `${timeRemaining.seconds}`);

    if (timeRemaining.totalTime <= 0) {
      daysLeft.innerHTML = "00";
      hoursLeft.innerHTML = "00";
      minsLeft.innerHTML = "00";
      secsLeft.innerHTML = "00";

      Clock(timesInterval);
    }
  }, 1000);
}
Clock(
  ".seconds__title",
  ".minutes__title",
  ".hours__title",
  ".days__title",
  date
);
