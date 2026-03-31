// import "./styles.css"

document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive")
  let curX = 0
  let curY = 0
  let tgX = 0
  let tgY = 0

  function move() {
    curX += (tgX - curX) / 20
    curY += (tgY - curY) / 20
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`
    requestAnimationFrame(() => {
      move()
    })
  }

  window.addEventListener("mousemove", event => {
    tgX = event.clientX
    tgY = event.clientY
  })

  move()
})

function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Add leading zero if the value is less than 10
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Format the time as HH:MM:SS
  var timeString = hours + ":" + minutes + ":" + seconds;

  // Update the content of the div
  document.getElementById("current-time").innerHTML = timeString;
}

// Call updateTime function every second to update the time
updateTime();
setInterval(updateTime, 1000);


