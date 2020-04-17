//決定位置

let sx = document.getElementById('sx');//儲存值screenX的元件
let sy = document.getElementById('sy');//儲存值screenY的元件
let px = document.getElementById('px');//儲存值pageX的元件
let py = document.getElementById('py');//儲存值pageY的元件
let cx = document.getElementById('cx');//儲存值clientX的元件
let cy = document.getElementById('cy');//儲存值clientY的元件

function showPosition(event){//宣告函式
    sx.value = event.screenX;//更新screenX值
    sy.value = event.screenY;//更新screenY值
    px.value = event.pageX;  //更新pageX值
    py.value = event.pageY;  //更新pageY值
    cx.value = event.clientX;//更新clientX值
    cy.value = event.clientY;//更新clientY值
}

let el = document.getElementById('body');//取得id屬性值body的元件
el.addEventListener('mousemove', showPosition, false);//滑鼠移動時呼叫函式更新位置資訊