/*此程式碼置於立即執行函式運算式(IIFE)中，可保護變數的有效範圍 */
(function(){
    //第一部分 : 建立hotel物件並顯示房間價格優惠訊息

    //以實字表示法建立hotel物件
    let hotel = {
        name : 'Park',
        roomRate: 240,//房間優惠
        discount: 15,//優惠折扣百分比
        offerPrice: function(){
            let offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    //顯示旅館名稱、標準房間價格與優惠價格
    let hotelName, roomRate, specialRate; // 宣告變數

    hotelName =document.getElementById('hotelName');// 取得頁面中的元件
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;//寫入旅館價格
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);//寫入房間價格
    specialRate.textContent ='$' + hotel.offerPrice();//寫入優惠價格


    //第二部分 : 計算並輸出房間優惠價格截止資訊
    let expiryMsg; //給使用者的文字訊息內容
    let today;    //今日的日期
    let elEnds;   //顯示優惠價格截止訊息的元件

    function offerExpires(today) {
        //在函式中宣告區域變數
        let weekFromToday, day, date, month, year, dayNames, monthNames;
        //加7天時間(以毫秒為單位)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 *1000);
        //建立陣列以儲存日次、月份名稱
        dayNames = ['sunday', 'monday', 'Tuesday', 'wednesday', 'Thursday', 
        'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
        //取得顯示於頁面日期年、月、日的各部份
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        //建立文字訊息內容
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date();//將今日日期存入變數
    elEnds = document.getElementById('offerEnds');//取得名稱為offerEnds元件
    elEnds.innerHTML = offerExpires(today);//將文字訊息內容放入元件內容中

    //結束立即執行函式運算式
}());