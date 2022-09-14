let user = {
    name: 'ahmet',
    surname: 'kayanı',
    age: 12,
    username: 'ahmetkayanı',
    password: 'hayda12345',
    interest: [
        'sleeping', 'reading','walking','gaming'
],
expenses: [100,200,30,40,500],
address: {
    country: 'Türkiye',
    city: 'Ankara'
}}



function notHesapla(){
    let inputvize = document.getElementById('vizeNotu');
    let inputfinal = document.getElementById('finalNotu');
      
          let notOrtalama = "";
        
          notOrtalama = (inputvize.value*0.4+inputfinal.value*0.6);


         let lblad = document.getElementById('lblnotOrtalama');
         let durum;
         if (notOrtalama<60) {
            durum = 'kaldınız'
         } else {
            durum = 'gectiniz'
         }


        //lblad.innerText = `Sonuc: ${durum}`
        lblad.textContent = `Sonuc: ${durum}`

}

function getir(){

    let lblgetir = document.getElementById('getir')

    user.interest.forEach(x=>{

        
        lblgetir.innerHTML += ` <li>${x}</li>`;

    })

}
function temizle(){

    let lblgetir = document.getElementById('getir')

    user.interest.forEach(x=>{

        
        lblgetir.innerHTML = ``;

    })
}

function getir1(){

    let deger1 = document.getElementById('inp1');

    let lblgetir1 = document.getElementById('filtrele');

   let results =  user.expenses.filter(x=>(x>deger1));

   results.forEach(x=>{
    lblgetir1.innerHTML += ` <li>${x}</li>`;

  })

}





