//運用FOR迴圈
let scores = [10, 20, 30, 40, 50, 60, 70, 80, 90];      //分數陣列
let arrayLength = scores.length;//陣列中的資料項目
let roundNumber = 0;            //目前回合數
let msg = '';                   //訊息
//let i;                        //計時器

//巡訪陣列中的項目
for(let i =0;i<arrayLength;i++){
    //陣列索引值自0開始(因此0是代表第一回合)
    //將目前回合數加1
    roundNumber = (i + 1);

    //分數陣列中取得分數
    msg +='Round' + roundNumber + ': ';

    //Get the score from the scores array(從分數數組中獲取分數)
    msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;