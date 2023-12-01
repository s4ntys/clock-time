function displayTime() {
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * (hh % 12) + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

displayTime(); // Zobraziť čas ihneď po načítaní stránky
setInterval(displayTime, 1000); // Aktualizovať čas každú sekundu
