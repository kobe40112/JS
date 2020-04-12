//運用DO　WHILE迴圈
let i = 1;      //設定計數器為1
let msg = '';   //文字訊息

//變數中儲存5倍數的資料表
do {
    msg += i + ' x 5 = ' + (i * 5) + '<br />';
    i++;
}while(i<5);
//注意，此處並不符合條件但程式區塊仍然已執行完畢

document.getElementById('answer').innerHTML = msg;