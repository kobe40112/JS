//使用建構子表示法建立和存取物件

function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}



let quayHotel = new Hotel('Kris', 50, 10);
let parkHotel = new Hotel('David',80, 30);

let details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailability();
let elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;


let details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability();
let elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;