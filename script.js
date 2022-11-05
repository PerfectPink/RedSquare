let obj = document.querySelector('#mainSquare');



function RSaddText() {
    let userText = document.querySelector('#btn-textArea');
    obj.textContent = userText.value;
}
function RSmakeRed() {
    obj.classList.remove('blue')
    obj.classList.add('makeRed')
}
function RSallX3() {
    let objXold = obj.clientWidth
    let objYold = obj.clientHeight
    obj.style.setProperty("--objX", objXold * 3 + 'px')
    obj.style.setProperty("--objY", objYold * 3 + 'px')
}
function RSwidthX3() {
    let objXold = obj.clientWidth
    let objYold = obj.clientHeight
    obj.style.setProperty("--objX", objXold * 2 + 'px')
}
function RSheightX3() {
    let objXold = obj.clientWidth
    let objYold = obj.clientHeight
    obj.style.setProperty("--objY", objYold * 2 + 'px')
}
function RSmakeRounded() {
    obj.classList.add('rounded')
}
function RShide() {
    if (obj.classList.contains('hide')) {
        //pass
    } else {
        obj.classList.add('hide')
    } if (obj.classList.contains('show')) {
        obj.classList.remove('show')
    }
}
function RSshow() {
    if (obj.classList.contains('show')) {
        //pass
    } else {
        if (obj.classList.contains('hide')) {
            obj.classList.remove('hide')
        }
        obj.classList.add('show')
    }
}
function RSdefault() {
    window.location.reload();
}