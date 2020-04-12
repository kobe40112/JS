//使用比較運算式

let pass = 50; //及格標準
let score = 90;//分數

//檢測使用者是否通過及格標準
let hasPassed = score >= pass;

//把訊息撰寫到頁面中
let el = document.getElementById('answer');
el.textContent = 'Level passed:' + hasPassed;