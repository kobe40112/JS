//利用事件監聽器向下相容IE8

let elUsername =document.getElementById('username');//取得id屬性為username的元件
let elMsg =document.getElementById('feedback');//取得id屬性為feedback的元件

function checkUsername(minLength) {//宣告函式
    if(elUsername.value.length<minLength) {//如果使用者名稱太短
        //設定訊息文字
        elMsg.innerHTML = 'Username must be' + minLength + 'characters or more';
    }else {//否則
        elMsg.innerHTML = '';//清除訊息文字
    }
}

if(elUsername.addEventListener) {                   //如果事件監聽器可被支援
    elUsername.addEventListener('blur', function(){ //當username元件失去焦點
        checkUsername(5);                           //呼叫checkUsername()
    }, false);                                      //以氣泡傳遞模式監聽事件
}else {                                             //否則
    elUsername.attachEvent('onblur', function(){    //IE相容:onblur
        checkUsername(5);                           //呼叫checkUsername()
    });
}