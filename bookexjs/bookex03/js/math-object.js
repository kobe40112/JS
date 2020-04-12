// 創建一個變量以容納1到10之間的隨機數
let randomNum = Math.floor((Math.random() * 10) + 1);

// 創建一個名為el的變量，以保存其id屬性值為info的元素
let el = document.getElementById('info');
// 將數字寫入該元素
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';