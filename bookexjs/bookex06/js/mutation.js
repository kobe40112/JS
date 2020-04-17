//運用MUTATION事件

let elList, addLink, newEl, newText, counter, listItems;//宣告變數

elList = document.getElementById('list');           //取得清單
addLink = document.querySelector('a');             //取得新增項目按鈕的元件
counter = document.getElementById('counter');       //取得選項計數器

function addItem(e) {                               //宣告函式
    e.preventDefault();                             //取消超鏈結預設動作
    newEl = document.createElement('li');          //新增<li>元件
    newText = document.createTextNode('New list item');//新增文字結點
    newEl.appendChild(newText);                        //將文字加入至<li>
    elList.appendChild(newEl);                         //將<li>加入至清單中
}

function updateCount() {                               //宣告函式
    listItems = elList.getElementsByTagName('li').length; //取得所有<li>的總數
    counter.innerHTML = listItems;                      //更新計數器
}

addLink.addEventListener('click', addItem, false);      //點擊按鈕時
elList.addEventListener('DOMNodeInserted', updateCount, false);//DOM被變更時