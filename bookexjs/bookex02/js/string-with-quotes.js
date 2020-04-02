//於字串中使用引號

//宣告變數
let title;
let message;

title = "Kris luo";
message = '<a href=\"sale.html\">200% off!</a>';

let elTitle = document.getElementById('title');
elTitle.innerHTML = title;
let elNote = document.getElementById('note');
elNote.innerHTML = message;