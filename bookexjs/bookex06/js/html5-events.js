//運用HTML5事件
function setup() {
    let textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window,addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function(event){
    return 'You have changes that have not been saved...';
}, false)