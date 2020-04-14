//文件物件模型

//將清單項目加入至清單的起始和結尾位置
let list = document.getElementsByTagName('ul')[0]; //取得<ul>元件

//加入新的清單項目至清單的結尾位置
let newItemLast = document.createElement('li');     //建立元件
let newTextLast = document.createTextNode('cream');  //建立文字節點
newItemLast.appendChild(newTextLast);               //將文字節點加入至元件
list.appendChild(newItemLast);                      //將元件節點至清單結尾位置


//加入新的清單項目至清單起始位置
let newItemFirst = document.createElement('li');    //建立元件
let newTextFirst = document.createTextNode('kale'); //建立文字節點
newItemFirst.appendChild(newTextFirst);             //將文字節點加入至元件
//insertBefore() 方法將一個節點安插在參考節點之前，作為某個特定父節點之子節點。
list.insertBefore(newItemFirst, list.firstChild);   //將元件節點至清單起始位置
let listItems = document.querySelectorAll('li');    //取得所有的<li>元件

//為所有的清單項目加入class屬性值cool
let i ;                                 //計數器變數
for(i=0;i<listItems.length;i++){        //巡訪元件
    listItems[i].className = "cool";    //變更class屬性值為cool
}

//加入清單項目數量至標題文字
let heading = document.querySelector('h2');
let headingText = heading.firstChild.nodeValue;
let totalItems = listItems.length;
let newHeading = headingText + '<span>' + totalItems + '</span>';
heading.textContent = newHeading;
