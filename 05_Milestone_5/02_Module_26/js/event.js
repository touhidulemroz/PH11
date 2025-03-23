function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

const btnMakeBlue = document.getElementById('btn-make-blue');
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function(){
    document.body.style.backgroundColor = 'blue';
}

const makeBtnPurple = document.getElementById('btn-make-purple');
makeBtnPurple.addEventListener('click', function(){
    document.body.style.backgroundColor = 'purple';
})