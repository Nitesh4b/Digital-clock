const body = document.querySelector("body");

const banner = document.createElement("div");
banner.classList.add("banner");
body.appendChild(banner);

const banerText = document.createTextNode("Your Local Time:")
banner.appendChild(banerText);

const display = document.createElement("div");
display.classList.add("display");
body.appendChild(display);


setInterval(function(){
  const dt = new Date();
  let hours = dt.getHours();
  let minutes = dt.getMinutes();
  let seconds = dt.getSeconds();

  const ampm = hours >= 12 ? 'PM' : 'AM';
  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours; // 0 should be 12

  // Pad with 0 if needed (e.g., 9 becomes 09)
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  let time = `${hours} : ${minutes} : ${seconds} ${ampm}`;
  display.innerText=`${time}`;

},1000)
