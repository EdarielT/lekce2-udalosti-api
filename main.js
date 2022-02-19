// tady je místo pro náš program
let lev = document.querySelector('.lev');

let beBold = () => {
    lev.style.fontWeight = 'bold';
}

let beRed = () => {
    lev.classList.toggle('red');
}