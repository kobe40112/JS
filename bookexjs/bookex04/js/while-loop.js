//運用WHILE迴圈
let i = 1;      //設定計數器為1
let msg = '';   //文字訊息

//變數中儲存5倍數的資料表
while(i < 10) {
    msg += i + ' x 5 =' + (i * 5) + '<br />';
    i++;
}

document.getElementById('answer').innerHTML = msg;