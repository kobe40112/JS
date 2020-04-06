//使用建構子語法建立物件
let hotel = new Object();

hotel.name = 'Kris';
hotel.rooms = 120;
hotel.booked = 70;
hotel.checkAvailability = function(){
    return this.rooms - this.booked;
};

let elName = document.getElementById('hotelName');
//設置了textContent 屬性，會刪除所有子節點，並被替換為包含指定字符串的一個單獨的文本節點。
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms');
//設置了textContent 屬性，會刪除所有子節點，並被替換為包含指定字符串的一個單獨的文本節點。
elRooms.textContent = hotel.checkAvailability();