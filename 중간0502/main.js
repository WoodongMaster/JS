// 상단 리스트 컨테이너 넥스트 버튼 JS
document.addEventListener("DOMContentLoaded", function () {
  let list = document.querySelector(".list");
  let nextButton = document.getElementById("next-button");

  let itemsToShow = 1; // 한 번에 보여질 항목 수
  let currentIndex = 0;
  let items; // items 변수를 전역 범위로 이동

  function showItems() {
    items = Array.from(list.children); // items 변수 초기화
    items.forEach(function (item, index) {
      if (index >= currentIndex && index < currentIndex + itemsToShow) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    currentIndex += itemsToShow;
    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
  }
  nextButton.addEventListener("click", showItems);
  showItems();
});

// main list items button

let currentIndex = 0;

function nextButton(num) {
  let mainList = document.getElementById(`ul${num}`); // ul 선택
  if (currentIndex == 8) {
    for (let i = 0; i < 4; i++) {
      mainList.children[i].classList.remove("hide");
    }
  }

  let itemsToShow = 4; // 한 번에 4개씩

  function showItems() {
    let items = Array.from(mainList.children); // items 변수 초기화

    // 이전에 보였던 아이템을 감춥니다.
    for (let i = currentIndex; i < currentIndex + itemsToShow; i++) {
      if (items[i]) {
        items[i].classList.add("hide");
      }
    }

    currentIndex += itemsToShow;

    // 새로운 범위에 속하는 아이템을 보이게 합니다.
    for (let i = currentIndex; i < currentIndex + itemsToShow; i++) {
      if (items[i]) {
        items[i].classList.remove("hide");
      }
    }

    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
    console.log(items);
    console.log(currentIndex);
  }

  showItems();
}

// 세일 특가 남은 시간
let remain = document.getElementById('remain-time');
function restTimes() {
    const saleTime = new Date("2023-5-10");
    const todayTime = new Date();
    const restTime = saleTime - todayTime;

    const diffDay = Math.floor(restTime / (1000*60*60*24));
    const diffHour = Math.floor((restTime / (1000*60*60)) % 24);
    const diffMin = Math.floor((restTime / (1000*60)) % 60);
    const diffSec = Math.floor(restTime / 1000 % 60);

    remain.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초 `;

}

restTimes();
setInterval(restTimes, 1000);

// sold out alert JS
let soldOutClass = document.querySelectorAll('.sold-out');

function soldOut() {
  for(let i = 0; i < soldOutClass.length; i++) {
    let list = soldOutClass[i];
    let listAnchor = list.querySelector('a');
    listAnchor.href = 'main.html';
  }
  alert('품절된 메뉴입니다.');
}

for (let i = 0; i < soldOutClass.length; i++) {
  soldOutClass[i].addEventListener('click', soldOut);
}

// sold out CSS JS

function soldOutCss() {
  for(let i = 0; i < soldOutClass.length; i++) {
    let list = soldOutClass[i];
  
    let listNewDiv = document.createElement('div');
    let listNewPara = document.createElement('p');
    listNewPara.textContent = '품절된 메뉴입니다.';
    listNewDiv.classList.add('newDiv');
    list.append(listNewDiv);
    listNewDiv.append(listNewPara);

  }
}

soldOutCss();

