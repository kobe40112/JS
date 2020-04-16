//運用EVENT物件於事件監聽器
function checkLength(e, minLength) {                 //宣告函式
  let el, elMsg;                                   //宣告變數
  if(!e){                                          //若event物件不存在
  e = window.event;                            //使用向下相容IE早期版本的方式
  }
  el = e.target || e.srcElement;                   //取得事件發生的目標元件
  elMsg =el.nextSibling;                           //取得它的兄弟元件節點

  if(el.value.length < minLength){                 //如果長度太短，則設定提示訊息文字
      elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more ';
  } else {                                         //否則
      elMsg.innerHTML = '';                        //清除訊息文字
  }
}

let elUsername = document.getElementById('username');//取得id屬性為username的元件
if(elUsername.addEventListener) {                    //如果支援事件監聽器
  elUsername.addEventListener('blur', function(e) {//當blur事件發生時
    checkLength(e, 5);                         //呼叫checkLength()
    }, false);                                       //使用事件氣泡模式
}else{                                             //否則
  elUsername.attachEvent('onblur', function(e){    //向下相容IE早期版本
    checkLength(e, 5);                         //呼叫checkLength()
    });
}