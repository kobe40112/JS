//存取和變更文字節點

let itemTwo = document.getElementById('two');   //取得第二個清單項目

//firstChild    從父點 可尋找目前第一個子節點
let elText = itemTwo.firstChild.nodeValue; //取得它的文字內容

elText = elText.replace('pine nuts', 'kris'); //將內容文字自pine nuts 變更為kale

itemTwo.firstChild.nodeValue =elText; //將變更後的文字設定至元件中

//ex :
let itemThree = document.getElementById('three');

let elText1 = itemThree.firstChild.nodeValue;

elText1 = elText1.replace('honey', 'David');

itemThree.firstChild.nodeValue = elText1;