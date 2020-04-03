//為歡迎訊息建立一個變數
let greeting = 'Hello';
let name = 'Kris';
let message = ', please check your order :';
//連接以上三個變數來建立歡迎訊息
let welocome = greeting + name + message ;

//建立變數儲存名牌資訊
let sign = 'Montague House';
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

//取得具有id屬性值為greeting元件
let el = document.getElementById('greeting');
//用個人化的歡迎訊息取代元件內容
el.textContent = welocome;

//取得具有id屬性值為userSign的元件，然後更新它的內容
let elSign = document.getElementById('userSign');
elSign.textContent = sign;

//取得具有id屬性值為tiles的元件，然後更新它的內容
let elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//取得具有id屬性值為subTotal的元件，然後更新它的內容
let elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//取得具有id屬性值為shipping的元件，然後更新它的內容
let elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

//取得具有id屬性值為grandTotal的元件，然後更新它的內容
let elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;