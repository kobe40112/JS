let hotel = {
    name: 'Kris',
    rooms: 50,
    booked:10,
    //checkAvailability()方法中，關鍵字this是用來表示使用物件中的rooms和booked特性。
    checkAvailability: function(){
        return this.rooms - this.booked;//40
    }
};

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms');
elRooms.textContent =hotel.checkAvailability();