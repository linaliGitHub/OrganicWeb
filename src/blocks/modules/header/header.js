document.querySelector('.header-menu').onclick = function () {
  document.querySelector('.menu').style.right = '0';
  document.querySelector('.nav').style.right = '60%';
  document.querySelector('.close').style.right = '20px';
  document.querySelector('body').classList.add('active');
};
document.querySelector('.close').onclick = function () {
  document.querySelector('.menu').style.right = '-100%';
  document.querySelector('.nav').style.right = '-100%';
  document.querySelector('.close').style.right = '-100%';
  document.querySelector('body').classList.remove('active');
};