let username, noteName, textEntered, target;//宣告變數

noteName = document.getElementById('noteName');//存放筆記名稱的元件

function writeLabel(e) {//宣告函式
    if(!e){//若event物件未被傳入
        e = window.event;//向下相容IE5-8瀏覽器
    }
    target = event.target || event.srcElement;//取得事件發生的目標元件
    textEntered = e.target.value//目標元件中的值，即輸入的文字
    noteName.textContent = textEntered;//更新筆記名稱文字
}

//這是錄製/暫停控制和函式定義開始處...
//參考下頁
if(document.addEventListener){//如果支援事件監聽器
    document.addEventListener('click', function(e){//對文件上的點擊動作
    recorderControls(e);//呼叫recorderControls()函式
    }, false);//以事件汽泡的模式擷取
    //如果使用者名稱的輸入框處發input事件，則呼叫writeLabel()函式
    noteInput.addEventListener('input', writeLabel, false);
}else{
    document.attachEvent('onclick', function(e){
        recorderControls(e);
    });
    //如果使用者名稱輸入框的keyup事件被啟動，則呼叫writeLabel()
    noteInput.attachEvent('onkeyup', writeLabel, false);
}
function recorderControls(e){//宣告recorderControls()函式
    if(!e){//若event物件未出現
        e = window.event;//向下相容IE5-8瀏覽器
    }
    target = event.target || event.srcElement;//取得目標元件
    if(event.preventDefault){//若支援preventDefault()函式
        e.preventDefault();//停止預設行為
    }else{//否則
        event.returnValue = false;//IE向下相容:停止預設行為
    }

    switch(target.getAttribute('data-state')){//取得date-state屬性值
        case 'record'://若其值為record
            record(target);//呼叫record()函式
            break;//結束函式執行並返回呼叫處
        case 'stop'://若其值為stop
            stop(target);//呼叫stop()函式
            break;//結束函式執行並返回呼叫處
            //若有更多按鈕則可繼續..
    }
};

function record(target){//宣告函式
    target.setAttribute('data-state', 'stop');//設定data-state屬性值為stop
    target.textContent = 'stop';//設定文字為stop
}

function stop(target){
    target.setAttribute('data-state', 'record');//設定data-state屬性值為record
    target.textContent = 'record';//設定文字為record
}