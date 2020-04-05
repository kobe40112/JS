//建立陣列
let colors = ['white','black','custom'];

//變更陣列中的第三項目
colors[2] = 'beige';

//取得具備id屬性值為color的元件
let el = document.getElementById('colors');

//顯示陣列中第三項目
el.textContent = colors[2];