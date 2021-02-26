document.querySelector('.header-menu').onclick = function () {
  document.querySelector('.menu').style.top = '0';
  document.querySelector('.nav').style.top = '50px';
  document.querySelector('.close').style.top = '20px';
  document.querySelector('body').classList.add('active');
};
document.querySelector('.close').onclick = function () {
  document.querySelector('.menu').style.top = '-100%';
  document.querySelector('.nav').style.top = '-100%';
  document.querySelector('.close').style.top = '-100%';
  document.querySelector('body').classList.remove('active');
};