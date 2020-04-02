//2020-02-05 PM
//console.log("before") 
    //檢查id(參數)
function checkTWId(id){
    //1.長度 ==10
    //2. 1 =A~Z
    //3. 2 =1 or 2
    //4. 3-10 = 0~9
    //5. 檢查碼
    let ret = false;
    //console.log("start checkId()");
    let letters = 'ABCDEFGHJKLMNOPQRSTUVWXYZIO';
    //正規表示法
    //ex: match(/搜尋目標/g全域搜尋 gi:加上i忽略大小寫敏感性);
    //match(/^開始符號 [A-Z]字元集合 [12]1or2 [0-9] {8} $結束符號/);
    if (id.match(/^[A-Z][12][0-9]{8}$/)){
        //charAt()
        let c1 = id.charAt(0);
        //indexOf()
        let n12 = letters.indexOf(c1) + 10; //E => 4 => 14
        let n1 = Math.floor(n12 / 10)   //1
        let n2 = n12 % 10;              //4
        //substr(抽取數位置,抽取幾個數);   parseInt:字串轉整數
        let n3 =parseInt(id.substr(1,1));
        let n4 =parseInt(id.substr(2,1));
        let n5 =parseInt(id.substr(3,1));
        let n6 =parseInt(id.substr(4,1));
        let n7 =parseInt(id.substr(5,1));
        let n8 =parseInt(id.substr(6,1));
        let n9 =parseInt(id.substr(7,1));
        let n10 =parseInt(id.substr(8,1));
        let n11 =parseInt(id.substr(9,1));
        let sum = n1*1 + n2*9 + n3*8 + n4*7 + n5*6 + n6*5 + n7*4 + n8*3 + n9*2 + n10*1 +n11*1;
        //上面的值有沒有被10整除，有的話傳true 沒有傳false;
        ret = sum % 10 == 0;
    }  
    //console.log("end checkId()")  
    return ret;
}
//console.log("after");




//2020-02-06-AM

//身分證產生器
function createTWId(){
    let gender = Math.floor(Math.random()*2) == 0;
    return createTWIdGender(gender);

}
//使用者指定地區
function createTWIdByArea(area){
    let gender = Math.floor(Math.random()*2) == 0;
    return createTWIdByBoth(area, gender);
}
//指定性別
function createTWIdGender(gender){
    let letters = 'ABCDEFGHJKLMNOPQRSTUVWXYZIO';    //抽地區
    let rand = Math.floor(Math.random()*26);        //0 - 25
    let area = letters.substr(rand,1);              //抽一碼
    return createTWIdByBoth(area, gender); 
}
//area = A ~ Z
//gender = ture(1)男/false(2)女

//指定地區與性別
function createTWIdByBoth(area = 'A',gender = false){
    //area = A ~ Z
    let id = area;
    //gender = true(1)/false(2)
    id += gender?"1":"2";
    //產生其他7碼身分證字號
    for(let i=0;i<7;i++){
        id += Math.floor(Math.random()*10);
    }
    //產生檢查碼
    for(let j=0;j<10;j++){ 
        if(checkTWId(id + j)){
            //OK
            id += j;
            break;
        }
    }
    return id;
}


function clone(source){
    if (source === null || typeof(source) !== 'object')return source;

    let target = new Object();
    for(let prop in source){
        if(typeof(source)[prop] === 'object'){
            target[prop] = clone(source[prop]);
        }else{
            target[prop] = source[prop];
        }
    }
    return target;
}

//日期時間
Date.prototype.getTWYear = function(){
    return this.getFullYear()-1911;
}
Date.prototype.getCWeek = function(){
    let w = this.getDay(); //0 -6
    let cw = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
    
}