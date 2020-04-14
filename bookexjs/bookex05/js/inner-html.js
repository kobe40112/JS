//變更文字和標籤元件

//將第一個清單項目儲存於變數中
let firstItem = document.getElementById('one');
//取得第一個清單項目的內容
let itemContent = firstItem.innerHTML;
//變更第一個清單項目內容，使成為一個超連結
firstItem.innerHTML = itemContent + ' <a href=\"http://example.org\">' + '</a>';