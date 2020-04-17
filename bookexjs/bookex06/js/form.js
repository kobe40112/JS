//運用表單事件

let elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;//宣告變數
elForm          = document.getElementById('formSignup');         //取得所有有需要使用的元件
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint(){                                             //宣告函式
    let package = this.options[this.selectedIndex].value;           //取得被選取的選項
    if (package == 'monthly') {                                     //若選取monthly選項
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';//顯示折扣訊息
    } else {                                                        //否則
        elPackageHint.innerHTML = 'Wise choicel!';                  //顯示其他訊息
    }
}

function checkTerms(event) {                                    //宣告函式
    if (!elTerms.checked) {                                     //若勾選選單選核取框
        elTermsHint.innerHTML = 'You must agree to the terms.'; //顯示訊息
        event.preventDefault();                                 //停止送出表單
    }
}
//建議事件監聽器：submit事件觸發checkTerms()函式，change事件觸發packageHint()函式
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);