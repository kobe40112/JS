//運用AND邏輯運算式
let score1 = 10;//第一階段分數
let score2 = 10;//第二階段分數
let pass1 = 8;  //第一階段通過分數
let pass2 = 8;  //第二階段通過分數

//檢測使用者是否通過兩階段測驗，並將結果儲存於變數中
let passBoth =(score1 >= pass1) && (score2>= pass2);

//建立文字訊息
let msg = 'Both rounds passed: ' + passBoth;

//撰寫文字訊息於頁面上
let el = document.getElementById('answer');
el.textContent = msg;