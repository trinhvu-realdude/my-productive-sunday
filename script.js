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

let pop_up_content = document.getElementById('pop-up-content');

let iframes = document.getElementsByTagName('iframe');

const buttonClose1 = () => {
    document.getElementById('pop-up-01').style.display = 'none';
    if (iframes != null) {
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src;
        }
    }
}

const buttonClose2 = () => {
    document.getElementById('pop-up-02').style.display = 'none';
    if (iframes != null) {
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src;
        }
    }
}

const buttonClose3 = () => {
    document.getElementById('pop-up-03').style.display = 'none';
    if (iframes != null) {
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src;
        }
    }
}

const buttonClose4 = () => {
    document.getElementById('pop-up-04').style.display = 'none';
    if (iframes != null) {
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src;
        }
    }
}

window.onclick = (event) => {
    if(event.target == new_window_1 || event.target == new_window_2 || event.target == new_window_3 || event.target == new_window_4) {
        new_window_1.style.display = 'none';
        new_window_2.style.display = 'none';
        new_window_3.style.display = 'none';
        new_window_4.style.display = 'none';
        if (iframes != null) {
            for (let i = 0; i < iframes.length; i++) {
                iframes[i].src = iframes[i].src;
            }
        }
    }
}