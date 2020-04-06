//操作瀏覽器物件

//window.innerHeight    視窗的高度(不包含chrome瀏覽器/使用者操作介面部分)(以像素為單位)
let msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';

//window.innerWidth     視窗的寬度(不包含chrome瀏覽器/使用者操作介面部分)(以像素度為單位)
msg += '<p>height: ' + window.innerHeight + '</p>';

//window.history.length history物件中的瀏覽記錄筆數
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';

//window.screen.width   使用screen物件並擷取它的 width 特性
msg += '<h2>screen</h2><p>width: ' +window.screen.width + '</p>';

//window.screen.height  使用screen物件並擷取它的 height 特性
msg += '<p>height: ' +window.screen.height + '</p>';


let el = document.getElementById('info');
el.innerHTML = msg;
//window.alert()   建立包含訊息文字的對話框(使用者必須按下「ok」按鈕才可關閉)
alert('Current page: ' + window.location);