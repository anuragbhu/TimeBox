let btn = document.getElementById('getTimezone');

if (btn !== null) {
  btn.addEventListener('click', Timezone);
}

function Timezone() {
  let time = document.getElementById('showTimezone');
  time.innerHTML = Date();
}

let btnCo = document.getElementById('getTimezoneCo');

if (btnCo !== null) {
  btnCo.addEventListener('click', TimezoneCo);
}

function TimezoneCo() {
  const url = '';
  // GET request using fetch()
  fetch(url)
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Display result
      document.getElementById('loc').innerHTML = json.timezone;
      document.getElementById('dt').innerHTML = json.date_time_wti;
    });
}
