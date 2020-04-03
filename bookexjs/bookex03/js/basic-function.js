let msg = 'Sign up to receive our newsletter for 10% off!';
function updateMessage(){
    let el = document.getElementById('message');
    //設置了textContent 屬性，會刪除所有子節點，並被替換為包含指定字符串的一個單獨的文本節點。
    el.textContent = msg;
}
updateMessage();