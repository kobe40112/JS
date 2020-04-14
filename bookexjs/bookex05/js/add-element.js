//在DOM樹中加入元件

//建立一個新文字節點並儲存於變數
let newEl = document.createElement('li');
//建立一個文字節點並儲存於變數
let newText = document.createTextNode('quinoa');
//將文字節點加入至元件節點下
newEl.appendChild(newText);
//尋找出新節點加入的位置
let position = document.getElementsByTagName('ul')[0];
//在指定的位置上插入新節點
position.appendChild(newEl);