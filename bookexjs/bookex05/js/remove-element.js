let removeEl = document.getElementsByTagName('li')[3]; //移除物件

let containerEl = removeEl.parentNode; //欲移除元件的父親點，即它的容納節點

containerEl.removeChild(removeEl);//移除元件節點