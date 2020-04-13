//利用標籤名稱選取元件
let elements = document.getElementsByTagName('li');

if(elements.length>0){
    let el = elements[1];
    el.className = 'cool';
}