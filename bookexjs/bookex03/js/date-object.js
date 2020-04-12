// 創建一個變量來保存一個新的Date對象（默認為現在）
let today = new Date();
// 創建一個變量來保存今年的年份
let year = today.getFullYear();

// 創建一個名為el的變量，以保存其id屬性具有頁腳值的元素
let el = document.getElementById('footer');
// 將年份寫入該元素。
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';