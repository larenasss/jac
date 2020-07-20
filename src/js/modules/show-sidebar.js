const sideBar = document.querySelector('.sidebar');
const btn = document.querySelector('.header__btn');
const btnClose = document.querySelector('.sidebar__close');

btn.addEventListener('click', function(){
  sideBar.style.transition = ".5s";
  sideBar.style.left = '0';
});

btnClose.addEventListener('click', function(){
  sideBar.style.transition = ".5s";
  sideBar.style.left = '-240' + 'px';
});
