//clock
function showTime(){
  var date = new Date();
  var hour = date.getHours(); 
  var minute = date.getMinutes();
  var timeCourse = "AM";
  
  if(hour == 0){
      hour = 12;
  }
  
  if(hour > 12){
      hour = hour - 12;
      timeCourse = "PM";
  }
  
  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  
  var time = hour + ":" + minute + ":" + timeCourse;
  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;
  
  setTimeout(showTime, 1000);
}

showTime();

// Show menu on click
function menu() {
  document.getElementById("menuStart").classList.toggle("show");
}
  
// Move icons on desktop
var desktopIcons = document.getElementsByClassName("desktop-icon");
 
for (let i = 0; i < desktopIcons.length; i++) {
  dragElement(desktopIcons[i]);
}

function dragElement(icon) {
  var position1 = 0, position2 = 0, position3 = 0, position4 = 0;
  icon.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    position3 = e.clientX;
    position4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    position1 = position3 - e.clientX;
    position2 = position4 - e.clientY;
    position3 = e.clientX;
    position4 = e.clientY;
    
    icon.style.top = (icon.offsetTop - position2) + "px";
    icon.style.left = (icon.offsetLeft - position1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}