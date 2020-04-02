//利用縮寫表示法建立變數

//方法1
let price = 5;
let quantity = 14;
let total = price * quantity;

//方法2
let price, quantity,total;
price = 5;
quantity = 14;
total = price * quantity;

//方法3
let price = 5,quantity=14;
let total = price*quantity;

//方法4
let el = document.getElementById('cost');
el.textContent = '$' + total;