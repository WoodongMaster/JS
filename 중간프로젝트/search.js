// 검색 값을 보여 줄 ul태그 상수
let searchViewList = document.getElementById("search-value");
let chk = true;
let tmpPara = document.getElementById("tmp-para");

// input 태그 상수
const getInput = document.querySelector("input");

// item들(가져 올 값들)
const items = ["서울의밤", "붉은원숭이", "단상지교", "고도리"];

function enteredKeys(event) {
  if (event.key == "Enter") {
    tmpPara.textContent = ``;
    document.getElementById("search-value").style.display = "none";
    document.querySelector(".product1").style.display = "none";
    document.querySelector(".product2").style.display = "none";
    document.querySelector(".product3").style.display = "none";
    document.querySelector(".product4").style.display = "none";
    let searchText = getInput.value;
    // 검색와 일치하는 키를 찾는 기능
    for (let item of items) {
      console.log(searchText);
      if (searchText == item) {
        document.getElementById("search-value").style.display = "flex";
        switch (searchText) {
          case "서울의밤":
            chk = false;
            document.querySelector(".product1").style.display = "block";
            tmpPara.textContent = `${searchText}의 검색결과입니다.`;
            break;
          case "붉은원숭이":
            chk = false;
            document.querySelector(".product2").style.display = "block";
            tmpPara.textContent = `${searchText}의 검색결과입니다.`;
            break;
          case "단상지교":
            chk = false;
            document.querySelector(".product3").style.display = "block";
            tmpPara.textContent = `${searchText}의 검색결과입니다.`;
            break;
          case "고도리":
            chk = false;
            document.querySelector(".product4").style.display = "block";
            tmpPara.textContent = `${searchText}의 검색결과입니다.`;
            break;
        }
      } 
    }
    if(chk == true) {
        tmpPara.textContent = `찾으시는 결과가 없습니다.`;
    }
  }
}

getInput.addEventListener("keypress", enteredKeys);
