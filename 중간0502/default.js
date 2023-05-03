let url = window.location.href;
const urlobj = new URL(url);
const urlpara = new URLSearchParams(urlobj.search);

let user_name = urlpara.getAll('id');
let user_password = urlpara.getAll('password');

// 로그인 했을때 메인화면에서 로그아웃으로 멘트 바꿈 (js)

console.log(document.querySelectorAll('a').href);

if(user_name==`admin` && user_password==`admin`){
  document.getElementById('log-in').innerHTML = `로그아웃`;
  document.getElementById('log-in').value = `login`;
  document.querySelectorAll('a').href += `?name=${user_name}&password=${user_password}`;
}

// 로그아웃 누르면 value 변경 및 메인화면으로
document.getElementById('log-in').addEventListener('click', () => {
  if(document.getElementById(`log-in`).value == "login"){
    document.getElementById('log-in').value = `logout`;
    document.getElementById(`log-in`).href = "main.html";
  }
});

// 장바구니 눌렀을때 (로그인 상태 / 로그아웃 상태)
document.getElementById('shoppingbasket').addEventListener('click', () => {

  if(document.getElementById('log-in').value=='login'){
    document.getElementById('shoppingbasket').href = 'shoppingbasket.html';
  }
  else{
    alert('로그인이 필요합니다');
    document.getElementById('shoppingbasket').href = 'login.html';
  }
});

