function showTime() {
  let date = new Date();
  let _jam = document.getElementById('hour');
  let _menit = document.getElementById('minute');
  let _detik = document.getElementById('second');
  
  let j = date.getHours();
  let m = date.getMinutes();
  let d = date.getSeconds();
  
  j = j < 10 ? '0' + j : j;
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  
  _jam.innerHTML = `${j}`;
  _menit.innerHTML = `${m}`;
  _detik.innerHTML = `${d}`;
  setInterval(showTime, 1000);
}

function showDate() {
  let _year = document.getElementById('year');
  let _month = document.getElementById('month');
  let _date = document.getElementById('date');
  
  const months = ["Jan", "Feb", "Marc", "Apri", "May", "Jun", "Jul", "Agust", "Sep", "Oct", "Nov", "Des"];
  
  let date = new Date();
  
  let y = date.getFullYear();
  let m = months[date.getMonth()];
  let d = date.getDate();
  
  
  _year.innerHTML = `${y}`;
  _month.innerHTML = `${m}`;
  _date.innerHTML = `${d}`;
}

showTime()
showDate();
