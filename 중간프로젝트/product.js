const input = document.getElementById('inputText');
const price = parseInt(document.getElementById('originalPrice').innerHTML.replace(/,/g, '').replace('원', ''));

//최종 가격
let payPrice = document.getElementById('price').textContent;
//최총 수량
let cntPrice = document.querySelector('#inputText').value;

function updatePrice() {
  const number = parseInt(input.value);
  let str = '';

  if (number > 1 && number <= 50) {
    str = (number * price).toLocaleString();
  } else if (number > 50) {
    input.value = 50;
    str = (50 * price).toLocaleString();
  } else if (number <= 1) {
    input.value = 1;
    str = (1 * price).toLocaleString();
  }

  document.getElementById('price').innerText = `${str}원`;
  payPrice = document.getElementById('price').textContent;
  cntPrice = document.querySelector('#inputText').value;
}

input.addEventListener('input', updatePrice);


function changeNumber(isPlus) {
  const number = parseInt(input.value);
  const newNumber = isPlus ? number + 1 : number - 1;
  if (newNumber >= 1 && newNumber <= 50) {
    input.value = newNumber;
    document.getElementById('price').innerText = (newNumber * price).toLocaleString() + '원';
  }
}

document.getElementById('minus').addEventListener('click', () => {
  changeNumber(false);
  payPrice = document.getElementById('price').textContent;
  cntPrice = document.querySelector('#inputText').value;
  
});

document.getElementById('plus').addEventListener('click', () => {
  changeNumber(true);
  payPrice = document.getElementById('price').textContent;
  cntPrice = document.querySelector('#inputText').value;
  
});

//이름 가져오기
let namePrice = "";
window.addEventListener('DOMContentLoaded', function(){ //등장하면서
  namePrice = document.getElementById('titleName').textContent;
});


//보내기
// 링크 주소 가져오기
const linkElement = document.getElementById('buy');
const linkElement2 = document.getElementById('cart');

// 링크를 클릭하면 이동주소로 이동
linkElement.addEventListener('click', function(e) {
  e.preventDefault(); //원래 이동 멈춤
  const url = 'order.html?name='+namePrice +'&price='+payPrice+'&count='+cntPrice;
  window.location.href = url;
});

linkElement2.addEventListener('click', function(e) {
  e.preventDefault(); //원래 이동 멈춤
  const url = 'shoppingbasket.html?product_name='+namePrice +'&product_price='+payPrice+'&product_amount='+cntPrice;
  window.location.href = url;
});

// 슬라이드

let slides =document.querySelector('.slides');
let slide = document.querySelectorAll('.slides li');
let currentIdx = 0; // 처음은 무조건 0
let slideCount = slide.length;
let slideWidth = 150;
let slideMargin = 25;
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

function moveSlide(num){
  // 슬라이드의 left값을 바꿔야함 
  slides.style.left = -num * (slideWidth + slideMargin) + 'px';
  currentIdx = num;
}

nextBtn.addEventListener('click', function(){
  // currentIdx + 2를 넘겨줄거임.
  // +4를 하면 4개씩 넘어감..
  if(currentIdx < slideCount - 2){
    moveSlide(currentIdx + 2);
  }else{
    moveSlide(0);
  }
});

prevBtn.addEventListener('click', function(){
  if(currentIdx > 0){
    moveSlide(currentIdx - 2);
  }else{
    moveSlide(slideCount - 2);
  }
})


