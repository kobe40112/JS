// 創建一個變量來保存一個新的Date對象（默認為現在）
let today = new Date();
// Get the year this year(今年獲得今年)
let year = today.getFullYear();
// 設置公司成立的日期
let est = new Date('Apr 16, 1996 15:45:55');
// 以毫秒為單位來計算當時與現在之間的差
let difference = today.getTime() - est.getTime();
// 除以毫秒數即可得出年數
difference = (difference / 31556900000);

// 創建一個名為elMsg的變量來保存其id屬性值為message的元素
let elMsg = document.getElementById('message');
// 將消息寫入該元素。
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';