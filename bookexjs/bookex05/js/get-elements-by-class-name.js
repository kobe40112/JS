//利用CLASS屬性選取元件

let elements = document.getElementsByClassName('hot'); //尋找class屬性名稱
                                                       //為hot的元件
if(elements.length > 2){    //如果找到3個元件以上
    let el = elements[1];   //則自節點字串取出第3個元件節點                        
    el.className = 'cool'; //將節點的class屬性變更為cool
}