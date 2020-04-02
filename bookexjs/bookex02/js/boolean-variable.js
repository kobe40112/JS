//利用變數來儲存布林資料

//宣告變數
let inStock;
let shipping;

//儲存布林資料
inStock =true;
shipping = false;

let elStock = document.getElementById('stock');
//className獲取或設置指定元素的class屬性的值
elStock.className = inStock;

let elShip = document.getElementById('shipping');
elShip.className = shipping; 