// tady je místo pro náš program
let lev = document.querySelector('.lev');

let beBold = () => {
    lev.style.fontWeight = 'bold';
}

let beRed = () => {
    lev.classList.toggle('red');
}

let beBigger = () => {
    lev.style.fontSize = 'larger';
}

let zvuk = document.getElementById('song');

let startAudio = () => {
    zvuk.play();
}

let stopAudio = () => {
    zvuk.pause();
}

let muteAudio = () => {
    zvuk.volume = 0;
}

let normalVolume = () => {
    zvuk.volume = 0.5;
}

let loudAudio = () => {
    zvuk.volume = 1;
}

let startAgain = () => {
    zvuk.currentTime = 0;
}