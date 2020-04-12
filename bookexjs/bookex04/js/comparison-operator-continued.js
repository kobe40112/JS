let score1 = 100;//第一階段分數
let score2 = 90;//第二階段分數
let highScore1 = 75;//第一階段最高分數
let highScore2 = 90;//第二階段最高分數

//檢測分數是否高於目前最高分數
let comparison = (score1 + score2) > (highScore1 + highScore2);

//撰寫訊息在頁面上
let el = document.getElementById('answer');
el.textContent = 'New high score: ' + comparison;