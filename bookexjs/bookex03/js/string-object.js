
// 創建一個名為saying的變量來保存將要使用的字符串
let saying = 'Home sweet home ';
// 創建一個名為msg的變量來保存將在頁面上顯示的消息
// 找到字符串的長度，並將其放入msg變量中
let msg = '<h2>length</h2><p>' + saying.length + '</p>'; //16

// 將字符串轉換為大寫並將其添加到msg變量
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';//HOME SWEET HOME
// 將字符串轉換為小寫並將其添加到msg變量
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';//home sweet home
// 在字符串中找到索引為12的字符並將其添加到msg變量中
msg += '<h2>character index: 12</h2><p>' + saying.charAt(12) + '</p>';// o
// 在字符串中找到“ ee”的第一個實例的索引號，並將其添加到msg變量中
msg += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>';// 7
// 查找字符串中'e'字符的最後一個實例的索引號，並將其添加到msg變量中
msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>';// 14
// 查找字符串中索引編號在8-14範圍內的字符，並將其添加到msg變量中
msg += '<h2>character index: 8-14</h2><p>' + saying.substring(8, 14) + '</p>'; // et hom
// 在字符串中找到“ me”的第一個實例，並將其替換為“ w”字符，然後將其添加到msg變量中
msg += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>';// How sweet home

// 創建一個名為el的變量，以保存其id屬性值為info的元素
let el = document.getElementById('info');
// 將消息寫入該元素
el.innerHTML = msg;
