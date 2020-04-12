//運用IF條件判斷句
let score = 80; //分數
let msg;        //訊息

if(score >= 50){    //如果分數是50或更高
    msg = 'Congratulations!';
    msg += ' Proceed to the next round.';
}
let el = document.getElementById('answer');
el.textContent = msg;