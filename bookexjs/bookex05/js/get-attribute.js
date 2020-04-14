//檢查屬性與擷取屬性值

let firstItem = document.getElementById('one');//取得第一個清單項目

if(firstItem.hasAttribute('class')){//若存在名稱為class的屬性
    let attr = firstItem.getAttribute('class');
    
    //取得屬性
    let el = document.getElementById('scriptResults');
    el.innerHTML = '<p>The first item has a class name: ' + attr +'</p>';
}

