const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const ampmElement = document.getElementById('ampm');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const greetingElement = document.querySelector('.greeting');

function updateTime() {
  const date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  
  let ampm = 'AM';
  if (hours >= 12) {
    ampm = 'PM';
    hours -= 12;
  }

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  hoursElement.textContent = formattedHours;
  minutesElement.textContent = formattedMinutes;
  secondsElement.textContent = formattedSeconds;
  ampmElement.textContent = ampm;

  updateDate();
  updateGreeting();
}

function updateDate() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  dayElement.textContent = day;
  monthElement.textContent = month;
  yearElement.textContent = year;
}

function updateGreeting() {
  const hours = new Date().getHours();
  let greeting;
  if (hours < 12) {
    greeting = 'Good Morning!';
  } else if (hours < 18) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }
  greetingElement.textContent = greeting;
}

setInterval(updateTime, 1000); 
updateTime();