//運用IF條件判斷句
let score = 100;    //分數
let msg = '';       //訊息

function congratulate(){
    msg += 'Congratulations! ';
}


if(score >= 50){    //如果分數是50或更高
    congratulate();
    msg += 'Proceed to the next round.';
}

let el = document.getElementById('answer');
el.innerHTML = msg;