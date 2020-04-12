let table = 3;              //資料表的單位
let operator = 'addition';  //計算方式(預設為加法)
let i = 1;                  //設定計數器為1
let msg = '';               //文字訊息

if(operator === 'addition'){//如果變數operator為加法
    while(i<11){            //當計數器小於11時
        msg += i + ' + ' + table + ' = ' +(i + table) + '<br />';//進行計算
        i++;                //計數器增加1
    }
}else{                      //反之
    while(i<11){            //當計數器小於11時
        msg += i + ' x ' + table + ' = ' +(i * table) + '<br />';//進行計算 
        i++;                //計數器增加1
    }
}

//撰寫訊息於頁面中
let el = document.getElementById('blackboard')
el.innerHTML = msg;