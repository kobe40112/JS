// 創建一個變量來保存將要使用的數字
let originalNumber = 10.23456;
// 創建一個變量以保存將在頁面上顯示的消息
let msg = '<h2>original number</h2><p>' + originalNumber + '</p>';// 10.23456
// 將數字四捨五入到小數點後三位並將其添加到msg變量中
msg += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3) + '</p>';// 10.235
// 將數字四捨五入為精確的3位數字，並將其添加到msg變量中
msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';// 10.2

// 創建一個名為el的變量，以保存其id屬性值為info的元素
let el = document.getElementById('info');
// 將消息寫入該元素
el.innerHTML = msg;