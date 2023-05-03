let total = 0;
let str = '';
let url = window.location.href;
const objList = [];
const urlobj = new URL(url);
const urlpara = new URLSearchParams(urlobj.search);


let product_name = urlpara.getAll('name');
let product_amount = urlpara.getAll('count');
let product_price = urlpara.getAll('price');

for (let i = 0; i < product_name.length; i++) {
    const obj = {
        name: `${product_name[i]}`,
        amount: `${product_amount[i]}`,
        price: `${product_price[i]}`
    };

    objList.push(obj);
}

for (let i of objList) {    // 배열돌기
    for (let j = 0; j < 4; j++) {

        if (i.name == document.getElementById(`p${j}`).getAttribute(`name`)) {
            document.getElementById(`p${j}`).style.display = `block`;
            document.querySelector(`#p${j} .product_amount`).innerHTML = `<h3>${i.amount}개</h3>`;
            total += (parseInt(document.getElementById(`p${j}`).value) * parseInt(i.amount));
        }
    }
}



const st_total = total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("pay_total").innerHTML = `총 가격 : ${st_total}원`;

function deleteList(n) {
    document.getElementById(`p${n}`).style.display = 'none';
    for (let i of objList) {    // 배열돌기
        if (i.name == document.getElementById(`p${n}`).getAttribute(`name`)) {
            total -= parseInt(i.amount) * parseInt(document.getElementById(`p${n}`).value);
        }
    }
    if(total==0){
        document.getElementById("pay_Btn").style.backgroundColor='#9BA4B5';
    }
    const sub_total = total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("pay_total").innerHTML = `총 가격 : ${sub_total}원`;
}


function payment() {
    if (total == 0) {
        alert('상품이 없습니다');
    }
    else {
        location.href = `order.html?name=${objList[0].name}&price=${objList[0].price}&count=${objList[0].amount}`;
    }
}