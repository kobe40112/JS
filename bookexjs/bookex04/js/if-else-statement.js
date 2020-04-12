//運用 IF...ELSE條件判斷句

let pass = 50;  //及格分數
let score = 80; //目前分數
//let score = 45; //目前分數
let msg;        //訊息

//依據分數來選擇顯示的文字訊息
if(score >= pass) {
    msg = 'Congratulations, you passed!';
} else {
    msg = 'Have another go!';
}

let el = document.getElementById('answer');
el.textContent = msg;
