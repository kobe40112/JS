//運用FOCUS 與 BLUR 事件

function checkUsername(){                               //宣告函式
    let username = el.value;                            //將輸入的文字儲存於變數username
    if(username.length < 5){                            //若username少於5個字元
        elMsg.className = 'warning';                    //變更訊息元件的class屬性
        elMsg.textContent = 'Not long enough, yet....'; //變更文字訊息
    }else{                                              //否則
        elMsg.textContent = '';                         //清除文字訊息
    }
}
function tipUsername(){                                 //宣告函式
    elMsg.className = 'tip';                            //變更訊息元件的class屬性
    elMsg.innerHTML = 'Username must be at least 5 characters'; //加入訊息文字
}

let el = document.getElementById('username');       //取得id屬性值為username的元件
let elMsg = document.getElementById('feedback');    //取得id屬性值為feedback的元件
                                                    //此元件用以顯示文字提示訊息
el.addEventListener('focus', tipUsername, false);   //當取得焦點時，呼叫tipUsername()
el.addEventListener('blur', checkUsername, false);  //當失去焦點時，呼叫checkUsername()