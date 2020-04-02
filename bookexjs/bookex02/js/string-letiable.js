//宣告變數
let username;
let message;

//利用變數儲存字串資料
username = 'Kris';
message = 'See our upcoming range';

let elName = document.getElementById('name');
//設置了textContent 屬性，會刪除所有子節點，並被替換為包含指定字符串的一個單獨的文本節點。
elName.textContent = username;

let elNote = document.getElementById('note');
elNote.textContent = message;