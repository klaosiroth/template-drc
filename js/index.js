const body = document.querySelector('body');
const toggle = document.querySelector('.site-header__toggler');
const nav = document.querySelector('.site-header__menu');

toggle.addEventListener('click', () => {

  nav.classList.toggle('site-header__menu--open');

  if (nav.classList.contains('site-header__menu--open')) {
    body.classList.add('noscroll')
  } else {
    body.classList.remove('noscroll');
  }
});
