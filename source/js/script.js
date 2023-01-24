let nav = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

nav.classList.remove('nav--nojs');
if (nav.classList.contains('nav--opened')) {
  nav.classList.remove('nav--opened');
  nav.classList.add('nav--closed');
}

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});
