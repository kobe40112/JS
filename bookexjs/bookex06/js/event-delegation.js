function getTarget(e){                          //宣告函式
    if(!e){                                     //如果不存在event物件
        e = window.event                        //使用舊版IE的event物件
    }
    return e.target || e.srcElement;            //取得事件發生的目標元件
}

function itemDone(e){                   //宣告函式
    //自清單中移除清單項目
    let target, elParent, elGrandparent;//宣告變數
    target = getTarget(e);          //取得被點擊鏈結的目標元件，及超鏈結元件
    elParent = target.parentNode;   //取得目標元件的父元件，即清單項目元件
    elGrandparent = target.parentNode.parentNode;//取得目標元件的祖父元件，即清單項目元件
    elGrandparent.removeChild(elParent);//自清單中移除清單項目

    //避免超鏈結將使用者帶離頁面
    if(e.preventDefault){//如果preventDefault()可運作
        e.preventDefault();//使用preventDefault()
    }else{//否則
        e.returnValue = false;//使用舊版IE的方式
    }
}

//設置事件監聽器，當click事件啟動時便呼叫itemDone()
let el = document.getElementById('shoppingList');//取得id屬性值為shoppingList元件
if(el.addEventListener){//如果事件監聽器可運作
    el.addEventListener('click', function(e){//為click事件加入監聽器
        itemDone(e);//呼叫itemDone()函式
    }, false);//使用事件汽泡模式
}else{//否則
    el.attachEvent('onclick', function(e){//使用舊版IE方式:onclick
        itemDone(e);//呼叫itemDone()函式
    });
}