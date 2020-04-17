//LOAD事件

function setup(){                                    //宣告函式
    let textInput;                                   //建立變數
    textInput = document.getElementById('username'); //取得id屬性值為username的元件
    textInput.focus();                               //將游標焦於元件上
}

window.addEventListener('load', setup, false);       //當頁面載入時，呼叫setup()函式