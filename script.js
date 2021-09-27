let new_window_1 = document.getElementById('pop-up-01');
let new_window_2 = document.getElementById('pop-up-02');
let new_window_3 = document.getElementById('pop-up-03');
let new_window_4 = document.getElementById('pop-up-04');

const onItemToPopUp1 = () => {
    document.getElementById('pop-up-01').style.display = 'block';
}

const onItemToPopUp2 = () => {
    document.getElementById('pop-up-02').style.display = 'block';
}

const onItemToPopUp3 = () => {
    document.getElementById('pop-up-03').style.display = 'block';
}

const onItemToPopUp4 = () => {
    document.getElementById('pop-up-04').style.display = 'block';
}

const buttonClose1 = () => {
    document.getElementById('pop-up-01').style.display = 'none';
}

const buttonClose2 = () => {
    document.getElementById('pop-up-02').style.display = 'none';
}

const buttonClose3 = () => {
    document.getElementById('pop-up-03').style.display = 'none';
}

const buttonClose4 = () => {
    document.getElementById('pop-up-04').style.display = 'none';
}
window.onclick = (event) => {
    if(event.target == new_window_1 || event.target == new_window_2 || event.target == new_window_3 || event.target == new_window_4) {
        new_window_1.style.display = 'none';
        new_window_2.style.display = 'none';
        new_window_3.style.display = 'none';
        new_window_4.style.display = 'none';
    }
}
