const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');
const bodyLock = document.querySelector('.body');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    nav.classList.add('nav-open');
    bodyLock.classList.add('locked');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    nav.classList.remove('nav-open');
    bodyLock.classList.remove('locked');
    menuOpen = false;
  }
});