//document.title               目前頁面的標題文字
let msg = '<p><b>page title: </b>' + document.title +'<br />';
//document.URL                 目前頁面的URL位址
msg += '<b>page address: </b>' + document.URL + '<br />';
//document.lastModified        目前頁面最後被更改的日期時間
msg += '<b>last modified: </b>' + document.lastModified + '</p>';

//document.getElementById()   取得具有符合所指定id屬性值的元件
let el = document.getElementById('footer');
el.innerHTML = msg;