
window.onload = function () {
  let start = document.getElementById("start");
  let timeUp = false
  let counter = document.getElementById("time");
  let answer = 0;
  let seconds = 30;
  let timeEvent = document.getElementById("timeEvent");
  let clock = document.getElementById("clock");
  let javascript = document.getElementById("javascript");
  let python = document.getElementById("python");
  let java = document.getElementById("java");


  const weekday = new Array(7);
  let a = new Date();
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let day = weekday[a.getDay()];

  const month = new Array(12);
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  let month1 = month[a.getMonth()];
  let date = a.getDate();
  let year = a.getFullYear();


  displayMessage();
  displayDate();
  changeTopic();
  setInterval(changeTitle, 1000);
  timer();
  


  $("#start").click(function () {
    $("#start").css('display', 'none')
    $('.question').css('display', 'inline')
    countdown();
  })


  function timer() {
      if (
      day === "Monday" ||
      day === "Tuesday" ||
      day === "Wednesday" ||
      day === "Thursday" ||
      day === "Friday" ||
      day === "Saturday" ||
      day === "Sunday"
    ) {
      start.style.display = "inline";
      counter.style.display = "inline";
    }

  }
 
  function countdown() {
    function tick() {
      let counter = document.getElementById("time");
      seconds--;
      counter.innerHTML = "0" + ":" + seconds;
      if (seconds > 0) {
        setTimeout(tick, 1000);
      
      }
      if (seconds == 0 && answer == 0) {
        $("#body2").hide(1000);
       
      }
    }
   return tick();
  }


  function displayMessage() {
    timeEvent.innerText =
      "Today," +
      " " +
      day +
      " " +
      date +
      " " +
      "of" +
      " " +
      month1 +
      " " +
      year +
      "," +
      " " +
      "We welcome you to Technurse";
  }

  function displayDate() {
    if (day === "Saturday" || "Sunday") {
      clock.innerText = "Happy Weekend Tech-Nation, lets talk Java";
    }
    if (day === "Monday") {
      clock.innerText = "Welcome to Tech-Nurse,  let's discuss Javascript";
    }
    if (day === "Tuesday") {
      clock.innerText = "Welcome to Tech-Nurse,  let's talk python";
    }
    if (day === "Wednesday") {
      clock.innerText = "Welcome to java Wednesday on TechNurse";
    }

    if (day === "Thursday") {
      clock.innerText = "Welcome to Javascript Thursday on TechNurse";
    }
    if (day === "Friday") {
      clock.innerText = "Welcome to python Friday, let's talk python";
    }
  }
  displayDate();


  function change() {
    let javascript1 = document.getElementById('javascript1').value;
    let javascript2 = document.getElementById('javascript2').value;
    let javascript3 = document.getElementById('javascript3').value;
    let javascript4 = document.getElementById('javascript4').value
    let python01 = document.getElementById('python1').value;
    let python02 = document.getElementById('python2').value;
    let python03 = document.getElementById('python3').value;
    let python04 = document.getElementById('python4').value;
    let java1 = document.getElementById('java1').value;
    let java2 = document.getElementById('java2').value;
    let java3 = document.getElementById('java3').value;
    let java4 = document.getElementById('java4').value;

    if (day === "Monday" || "Thursday") {
      (javascript1 === 'yes') ? answer += 1 : answer += 0;
      (javascript2 === 'no') ? answer += 1 : answer += 0;
      (javascript3 === 'both') ? answer += 1 : answer += 0;
      (javascript4 === 'no') ? answer += 1 : answer += 0;
    }
    if (day === "Friday" || "Tuesday") {
      (python01 === 'yes') ? answer += 1 : answer += 0;
      (python02 === 'no') ? answer += 1 : answer += 0;
      (python03 === 'both') ? answer += 1 : answer += 0;
      (python04 === 'no') ? answer += 1 : answer += 0;
    }
    if (day === "Wednesday" || "Saturday" || "Sunday") {
      (java1 === 'yes') ? answer += 1 : answer += 0;
      (java2 === 'no') ? answer += 1 : answer += 0;
      (java3 === 'both') ? answer += 1 : answer += 0;
      (java4 === 'no') ? answer += 1 : answer += 0;
    }
    return answer
  }

  let submitBtnJavascript = document.getElementById('submitBtnJavascript')
  let submitBtnJava = document.getElementById('submitBtnJava')
  let submitBtnPython = document.getElementById('submitBtnPython')

  let submitBtn = [submitBtnJavascript, submitBtnPython, submitBtnJava]
  for (let i = 0; i < 3; i++) {
    submitBtn[i].addEventListener('click', function () {
      change();
      $("#body2").hide(1000);
      if (answer == 0 && seconds != 0) {
        $("#body2").hide(1000);
        $(".noAttempt").css('display', 'inline-block')
      }
       else if (answer > 0) {
        $("#clock").text("You scored " + answer);
        $("#body2").hide(1000);
        $(".refresh").css('display', 'inline-block')
      }
    })
  }


  function changeTopic() {
    if (day === "Saturday") {
      javascript.style.display = "inline"
    }
    if (day === "Sunday") {
      java.style.display = "inline"
    }
    if (day === "Monday") {
      javascript.style.display = "inline";
    }
    if (day === "Tuesday") {
      python.style.display = "inline";
    }
    if (day === "Wednesday") {
      java.style.display = "inline";
    }
    if (day === "Thursday") {
      javascript.style.display = "inline";
    }
    if (day === "Friday") {
      python.style.display = "inline";
    }
  }
  changeTopic();

  function changeTitle() {
    let title = document.getElementById("title");
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 4; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      colorInput = color;
      title.style.color = colorInput;
    }
  }
}

