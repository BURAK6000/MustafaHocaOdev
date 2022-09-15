let user = {
    name: 'ahmet',
    surname: 'kayanı',
    age: 12,
    username: 'ahmetkaya',
    password: 'ahmet12345',
    interest: [
        'sleeping', 'reading', 'walking', 'gaming'
    ],
    expenses: [100, 200, 30, 40, 500],
    address: {
        country: 'Türkiye',
        city: 'Ankara'
    }
}

function notHesapla() {
    let vize = document.querySelector(".vize");
    let final = document.querySelector(".final");
    let result = document.querySelector('.result');
  
    let avg = vize.value * 0.4 + final.value * 0.6;
    let value;
    if (avg > 80) {
      value = "Başarılı";
    } else if (avg > 60) {
      value = "Geçtiniz";
    } else if (avg >= 50) {
      value = "Ortalama ile Geçtiniz";
    } else {
      value = "Kaldınız";
    }
  
    result.textContent = ` Sonuc =====> ${resultStyleDegistir(value)}`;
    //result.innerHTML = `<span class="text-danger" >Sonuc =====> ${value} </span>`;

  }

  function resultStyleDegistir(value){
    let result = document.querySelector(".result")
    switch (value) {
        case "Başarılı":
            result.style.color = "green"
            
            break;
        case "Geçtiniz":
            result.style.color = "blue"
            break;
        case "Ortalama ile Geçtiniz":
            result.style.color = "orange"
            
            break;
    
        default:
            result.style.color = "red"
            break;
    }

    
    result.innerHTML = `<span class="span" >Sonuc =====> ${value} </span>`;



}

function getir() {

    let lblgetir = document.getElementById('getir')

    let btntemizle = document.getElementById('btntemizle');
    let btngetir = document.getElementById('btngetir');


    btngetir.className += ` disabled `;
    btntemizle.className = "btn btn-danger";

    user.interest.forEach(x => {


        lblgetir.innerHTML += ` <li>${x}</li>`;

    })

}
function temizle() {

    let lblgetir = document.getElementById('getir')

    let btntemizle = document.getElementById('btntemizle');
    let btngetir = document.getElementById('btngetir');

    btntemizle.className += ` disabled `;
    btngetir.className = "btn btn-danger";


    user.interest.forEach(x => {


        lblgetir.innerHTML = ``;

    })
}

function getir1() {

    let deger1 = document.getElementById('inp1');


    let lblgetir1 = document.getElementById('filtrele');
    lblgetir1.innerHTML = ``;

    let results = user.expenses.filter(x => (x > deger1.value));

    results.forEach(x => {
        lblgetir1.innerHTML += ` <li>${x}</li>`;

    })

}

function login(){

    let username1 = document.querySelector(".username1")
    let password1 = document.querySelector(".password1")

  
let value1;
    if (username1.value == user.username && password1.value == user.password) {
        alert("Giriş Başarılı")
      }  else {
        alert("Kullanızı adı ya da şifre yanlış")
      }


}

let form = document.forms["form2"];


function login1(){

    if (form.userName.value === user.username &&form.password.value === user.password) {
        alert("Giriş Başarılı")
      }  else {
        alert("Kullanızı adı ya da şifre yanlış")
      }


}


let txtyazıcevir = document.getElementById("inpdeneme");

const yazıCevir = ()=>{
    console.log()
}





