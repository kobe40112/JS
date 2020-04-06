let subtotal = (13+1) * 5 ; //subtotal為70
let shipping = 0.5 * (13+1); //shipping為7

let total = subtotal + shipping; //total為77

let elSub = document.getElementById('subtotal');
//設置了textContent 屬性，會刪除所有子節點，並被替換為包含指定字符串的一個單獨的文本節點。
elSub.textContent = subtotal;
let elShip = document.getElementById('shipping');
//設置了textContent 屬性，會刪除所有子節點，並被替換為包含指定字符串的一個單獨的文本節點。
elShip.textContent = shipping;

let elTotal = document.getElementById('total');
elTotal.textContent = total;