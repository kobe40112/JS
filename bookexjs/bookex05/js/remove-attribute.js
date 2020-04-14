//移除屬性

//取得第一個項目
let firstItem = document.getElementById('two');

//hasAttribute()    檢查是否該元件節點具備指定屬性
if(firstItem.hasAttribute('class')){//若存在class屬性
    firstItem.removeAttribute('class');//移除它的class屬性
}


//removeAttribute() 自元件節點移除指定屬性