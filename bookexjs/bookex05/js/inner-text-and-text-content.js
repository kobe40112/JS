//只存取文字內容

let firstItem = document.getElementById('one'); //擷取第一個清單內容值
let showTextContent = firstItem.textContent;    //擷取清單textContent內容值
let showInnnerText = firstItem.innerText;       //擷取清單innerText內容值

//在清單尾端顯示這兩個特性的內容值
let msg = '<p>textContent: ' + showTextContent + '</p>'; //fresh figs
    msg += '<p>innerText: ' + showInnnerText + '</p>';   //figs  (因fresh會被CSS規則隱藏)
let el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';
