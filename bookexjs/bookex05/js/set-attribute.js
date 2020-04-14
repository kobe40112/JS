//建立屬性與變更屬性值

//取得第一個清單項目
let firstItem = document.getElementById('one');

//變更它的class屬性
firstItem.className = 'complete';

//取得第四個清單項目
let fourthItem = document.getElementsByTagName('li').item(3);

//加入一個屬性
//setAttribute()    設定屬性值
let el2 = document.getElementById('four');
el2.setAttribute('class','cool');