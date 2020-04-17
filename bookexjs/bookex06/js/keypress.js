//取得敲擊的鍵盤按鍵

let el;//宣告變數

function charCount(e){//宣告函式
    let textEntered, charDisplay, counter, lastkey;//宣告變數
    textEntered = document.getElementById('message').value;//取得使用者所輸入的文字
    charDisplay = document.getElementById('charactersLeft');//取得id屬性值為
    //charatersLeft的元件
    counter = (180 - (textEntered.length));//計算剩餘可輸入的字元數
    charDisplay.textContent = counter;//顯示剩餘字元數
    lastkey = document.getElementById('lastKey');//取得id屬性值為lastKey的元件
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;//顯示最後輸入字元訊息
}

el = document.getElementById('message');//取得訊息元件
el.addEventListener('keypress', charCount, false);//keypress事件