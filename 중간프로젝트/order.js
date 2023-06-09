const pay1Btn = document.querySelector('.pay1');
if (pay1Btn) {
  pay1Btn.addEventListener('click', function() {
    const paymentOption = document.querySelector('.paymentC');
    paymentOption.innerHTML = '신용카드';
  });
}

// 무통장 입금 결제 버튼
const pay2Btn = document.querySelector('.pay2');

pay2Btn.addEventListener('click', function() {
  const paymentOption = document.querySelector('.paymentC');
  paymentOption.textContent = '무통장 입금';
});

// 카카오페이 결제 버튼
const pay3Btn = document.querySelector('.pay3');

pay3Btn.addEventListener('click', function() {
  const paymentOption = document.querySelector('.paymentC');
  paymentOption.textContent = '카카오페이';
});

// 네이버페이 결제 버튼
const pay4Btn = document.querySelector('.pay4');

pay4Btn.addEventListener('click', function() {
  const paymentOption = document.querySelector('.paymentC');
  paymentOption.textContent = '네이버페이';
});

// 애플페이 결제 버튼
const pay5Btn = document.querySelector('.pay5');

pay5Btn.addEventListener('click', function() {
  const paymentOption = document.querySelector('.paymentC');
  paymentOption.textContent = '애플페이';
});

// 이전 페이지에서 값 가져오기 + 주종 나누기
const data = decodeURI(window.location.search); 
let pName = data.substring(data.indexOf('=')+1,data.indexOf('&'));
let pPrice = data.substring(data.indexOf('=',data.indexOf('=')+1)+1,data.lastIndexOf('&')-1);
let pCount = data.substring(data.lastIndexOf('=')+1);
let pImg ="";
let pType ="";

switch(pName){
  case '서울의 밤': 
    pType='증류주',
    pImg='img/서울의밤.jpg'; 
    break;
  case '붉은원숭이': 
    pType='탁주',
    pImg='img/붉은원숭이.jpg'; 
    break;
  case '단상지교': 
    pType='약주',
    pImg='img/단상지교.jpg';
    break;
  case '고도리 샤인머스캣 와인': 
    pType='과실주',
    pImg='img/고도리샤인머스캣와인.jpg';
    break;
  default: 
    pType='미정'; 
    pImg='img/술1.jpg'
    break;
};

//화면이 켜지는 순간 값 뿌리기
window.addEventListener('DOMContentLoaded', function(){
  document.getElementById('name').innerText = pName;
  document.getElementById('type').innerText = pType;
  document.getElementById('price').innerText = pPrice + ' /';
  document.getElementById('count').innerText = pCount+'개';
  document.getElementById('orderPrice').innerText = pPrice.toLocaleString() + '원';

  const lastPrice = parseInt(pPrice.replace(/,/g, ''));
  document.getElementById('totalPrice').innerText = lastPrice.toLocaleString() + '원';
  document.getElementById('totalPayment').innerText = ((lastPrice)+3000).toLocaleString()+'원';
  let img = document.getElementById('orderImg'); 
  img.setAttribute('src', pImg); 
});
