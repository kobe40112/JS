//利用CSS選擇器選取物件

//querySelector()僅回傳第一個符合條件的元件
let el = document.querySelector('li.hot');
el.className = 'cool';

//querySeletorAll回傳所有符合條件的節點串列
//第二個符合條件的元件(第三個清單選項)被選取並變更
let els = document.querySelectorAll('li.hot');
els[1].className = 'cool';