//前/後一個兄弟節點

// 選擇起點並找到其同級。
let startItem = document.getElementById('two');
let prevItem = startItem.previousSibling; //前一個
let nextItem = startItem.nextSibling;   //後一個


// 更改同級的類屬性的值。
prevItem.className = 'complete';
nextItem.className = 'cool';