// 입력수량
const input = document.getElementById('inputText');
// 제품가격 replace를 통해 , 원을 빈공백처리한다.
const price = parseInt(document.getElementById('originalPrice').innerHTML.replace(/,/g, '').replace('원', ''));

//최종 가격
let payPrice = document.getElementById('price').textContent;
//최총 수량
let cntPrice = document.querySelector('#inputText').value;


// 총 구매 가격 설정
function updatePrice() {

  // input값 가져오기
  const number = parseInt(input.value);
  // 수량 * 가격을 담을 변수
  let str = '';

  
  if (number > 1 && number <= 50) {  // number가 1보다 크고, 50보다 작거나 같으면 number * price해준다.
    str = (number * price).toLocaleString();
  } else if (number > 50) {  // number가 50보다 큰 경우 input값은 50이고 price랑 곱한다.
    input.value = 50;
    str = (50 * price).toLocaleString();
  } else if (number <= 1) {   // number 1보다 작거나 같은 경우 input값은 1이고 price랑 곱한다.
    input.value = 1;
    str = (1 * price).toLocaleString();
  }

  document.getElementById('price').innerText = `${str}원`;

  // order로 넘겨주기위해 payPrice, cntPrice는 여기다 써준다. textContent : 입력된 문자열을 그대로 넣는다.
  payPrice = document.getElementById('price').textContent;
  cntPrice = document.querySelector('#inputText').value;
}

// 입력 이벤트가 발생하면 updatePrice()함수가 실행된다.
input.addEventListener('input', updatePrice);



// 파라미터를 통해 isPlus true면 +1 아니면 -1하는 함수
function changeAmount(isPlus) {
  // input값을 정수값으로 변환
  const number = parseInt(input.value);
  // 삼항연산자를 통해 isPlus가 true면 +1 flase면 -1을 newNumber에 반환한다.
  const newNumber = isPlus ? number + 1 : number - 1;

  // newNumber가 1이상 50이면 newNumber을 input값에 넣고 newNumber * price한 값을 innerText를 통해 바꿔준다.
  if (newNumber >= 1 && newNumber <= 50) {
    input.value = newNumber;
    document.getElementById('price').innerText = (newNumber * price).toLocaleString() + '원';
  }
}

// minus또는 plus를 클릭하면 changeAmount함수가 실행됨
document.getElementById('minus').addEventListener('click', () => {
  changeAmount(false);

  // order로 넘겨주기 위한 값 저장.
  payPrice = document.getElementById('price').textContent;
  cntPrice = document.querySelector('#inputText').value;
});

document.getElementById('plus').addEventListener('click', () => {
  changeAmount(true);

  // order로 넘겨주기 위한 값 저장.
  payPrice = document.getElementById('price').textContent;
  cntPrice = document.querySelector('#inputText').value;
});

//이름 가져오기
let namePrice = "";
window.addEventListener('DOMContentLoaded', function(){ 
  // 페이지가 나오면 titleName의 문자열을 그대로 읽어 namePrice에넣어준다.
  namePrice = document.getElementById('titleName').textContent;
});


// 보내기
// 구매하기 버튼의 링크 주소 가져오기 
const linkElement = document.getElementById('buy');
const marketLink = document.getElementById('cart');

// 구매하기를 누르면 order페이지로 이동하는 이벤트리스너
linkElement.addEventListener('click', function(e) {
  e.preventDefault(); // 원래 이동 멈춤
  // url에 order.html, 제품이름, 가격, 수량 정보를 저장
  const url = 'order.html?name='+namePrice +'&price='+payPrice+'&count='+cntPrice;
  // 만들어진 url로 가기
  window.location.href = url;
});

// 장바구니 버튼을 누르면 정보를 담고 장바구니페이지로 이동하는 이벤트 리스너
marketLink.addEventListener('click', function(e) {
  e.preventDefault(); // 원래 이동 멈춤
  // url에 order.html, 제품이름, 가격, 수량 정보를 저장
  const url = 'shoppingbasket.html?name='+namePrice +'&price='+payPrice+'&count='+cntPrice;
  // 만들어진 url로 가기
  window.location.href = url;
});






// 슬라이드


let slides =document.querySelector('.slides');
// li들 다 가져오기
let slide = document.querySelectorAll('.slides li');
// 0부터 보여줘야하니까 무조건 0으로 설정
let currentIdx = 0; // 처음은 무조건 0
// slide 길이가져오기
let slideCount = slide.length;

// 이미지 width 고정크기, margin
let slideWidth = 150;
let slideMargin = 25;
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

// 전체 width구하기
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