var arr = document.querySelectorAll('.question__answer');
var preId = 5;

var show = (id) => {
    arr[id].classList.add('question__answer--show');
    arr[preId].classList.remove('question__answer--show');
    preId = id;
}

var navMobile = document.getElementById('navbar-mobile');
var btnHide = document.getElementById('btn-hide');
var btnShow = document.getElementById('btn-show');

var isShowBtnMenu = true;

var showNav = () => {

    if (isShowBtnMenu) {
        btnShow.style.display = 'none';
        btnHide.style.display = 'block';
        navMobile.classList.add('navbar-mobile--show');
    } else {
        btnShow.style.display = 'block';
        btnHide.style.display = 'none';
        navMobile.classList.remove('navbar-mobile--show');
    }
    isShowBtnMenu = !isShowBtnMenu;
}