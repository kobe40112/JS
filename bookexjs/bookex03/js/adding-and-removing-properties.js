//新增和移除特性

//設置對象
let hotel = {
    name : 'Kris luo',
    rooms: 120,
    booked : 70,
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

//更新HTML
let elName = document.getElementById('hotelName');//獲取元素
elName.textContent = hotel.name;//使用對象的屬性更新HTML

let elPool = document.getElementById('pool');//獲取元素
//className獲取或設置指定元素的class屬性的值
elPool.className = 'pool: ' + hotel.pool;//使用對象的屬性更新HTML

let elGym = document.getElementById('gym');//獲取元素
//className獲取或設置指定元素的class屬性的值
elGym.className = 'Gym: ' + hotel.gym;//使用對象的屬性更新HTML


/*
注意：textContent在IE 8或更早版本中不起作用
您可以在第16行使用innerHTML，但請注意p228-231上的安全性問題
*/