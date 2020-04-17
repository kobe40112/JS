//CLICK事件

//建立提示訊息的HTML內容
let msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m. ';
msg += 'During this time, there may be minor disruptions to service.</div>';

let elNote = document.createElement('div');             //建立一個新元件
elNote.setAttribute('id', 'note');                      //設定id屬性值為note
elNote.innerHTML = msg;                                 //將訊息的HTML內容加入至元件中
document.body.appendChild(elNote);                      //將元件加入至頁面中

function dismissNote(){                                 //宣告函式
    document.body.removeChild(elNote);                  //移除訊息元件
}

let elClose = document.getElementById('close');         //取得關閉按鈕元件
elClose.addEventListener('click', dismissNote, false);  //當click事件啟動時便移除訊息