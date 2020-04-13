//巡訪節點串列

let hotItems = document.querySelectorAll('li.hot'); //將節點串列儲存於陣列中

if(hotItems.length > 0){    //若陣列中包含節點項目
    for(let i=0; i<hotItems.length; i++){//巡訪每一個節點
        hotItems[i].className = 'cool'; //變更class屬性值
    }
}