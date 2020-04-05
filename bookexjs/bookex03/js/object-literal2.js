//宣告變數hotel 陣列內容 
let hotel = {
    name: 'Kris',
    rooms: 150,
    booked: 70,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
};

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
