//第一/最後一個子節點

//選取一起始節點並尋找它的子節點
let startItem = document.getElementsByTagName('ul')[0];
let firstItem = startItem.firstChild; //第一個節點
let lastItem = startItem.lastChild;   //最後一個節點

//變更子節點的class屬性值
firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');