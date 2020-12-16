
var arr = document.querySelectorAll('.question__answer');
var preId = 5;

var show = (id) => {
    arr[id].classList.add('question__answer--show');
    arr[preId].classList.remove('question__answer--show');
    preId = id;
}
