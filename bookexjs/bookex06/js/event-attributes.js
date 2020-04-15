//HTML事件處理器屬性 (請勿採用) 因為此方法被視為是一不佳的實務案例;但因為在舊的程式碼中可能會遇見此方法(知道有這方法就好)

function checkUsername(){                                //宣告函式
    let elMsg = document.getElementById('feeddback');    //取得id屬性為feedback的元件
    let elUsername = document.getElementById('username');//取得id屬性為username的元件
    if(elUsername.nodeValue.length<5) {                  //如果使用者名稱太短
        elMsg.textContent = 'Username must be 5 characters or more';//設定訊息文字
    } else {                     //否則
        elMsg.textContent = '';//清除訊息文字
    }
}