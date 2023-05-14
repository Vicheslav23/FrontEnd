const title = document.getElementById('title')
let flag;

function changeTitle(){
    const title = document.getElementById('title');
    const clicked = 'You clicked button';
    const unClicked ='Welcome to my page'
    

    if (flag) {
        title.textContent = clicked;
        flag = false;
    } else {
        title.textContent = unClicked;
        flag = true;
    }
}
function changeMessage(){
    const message = document.getElementsByClassName('message');
    message.textContent = 'new message';
}

const images = [
    
]