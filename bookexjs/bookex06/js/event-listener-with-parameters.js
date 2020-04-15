//於事件監聽器中使用需傳入參數的函式

let elUsername = document.getElementById('username');//取得id屬性為username的元件
let elMsg = document.getElementById('feedback');//取得id屬性為feedback的元件

function checkUsername(minLength) {//宣告函式
    if(elUsername.value.length < minLength) {//如果使用者名稱太短
        elMsg.textContent = 'Username must be' + minLength + 'characters or more';
    }else {//否則
        elMsg.innerHTML = '';//清除訊息文字
    }
}

elUsername.addEventListener('blur', function(){//當它失去焦點時
    checkUsername(3);                          //於此傳入引數
}, false);