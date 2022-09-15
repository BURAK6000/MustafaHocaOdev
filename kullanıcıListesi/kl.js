let userList = [
    {
      isim: "Mustafa",
      soyisim: "Öztürk",
      yas: 34,
      username: "musty",
      password: "123",
      ilgiAlanlari: ["sinema", "felsefe", "müzik"],
      harcamalar: [100, 20, 65, 258, 5],
      address: {
        country: "Türkiye",
        city: "Ankara",
      },
    },
    {
      isim: "Mert",
      soyisim: "Kaya",
      yas: 30,
      username: "mert",
      password: "123",
      ilgiAlanlari: ["sinema", "futbol"],
      harcamalar: [1000, 200, 65, 25, 5],
      address: {
        country: "Türkiye",
        city: "Ankara",
      },
    },
    {
      isim: "ALi",
      soyisim: "Ertürk",
      yas: 40,
      username: "ali",
      password: "123",
      ilgiAlanlari: ["müzik", "resim"],
      harcamalar: [480, 300, 52],
      address: {
        country: "Türkiye",
        city: "Sivas",
      },
    },
    {
      isim: "Şefik",
      soyisim: "Çalım",
      yas: 28,
      username: "şefik",
      password: "123",
      ilgiAlanlari: ["sinema", "felsefe", "müzik", "yemek"],
      harcamalar: [2000, 589, 65, 2580, 55, 26],
      address: {
        country: "Kanada",
        city: "Toronto",
      },
    },
    {
      isim: "Merve",
      soyisim: "Öztürk",
      yas: 25,
      username: "merve",
      password: "123",
      ilgiAlanlari: ["müzik", "dans", "resim"],
      harcamalar: [205, 165, 1258, 15],
      address: {
        country: "Türkiye",
        city: "İstanbul",
      },
    },
    {
      isim: "Hasan",
      soyisim: "Gürel",
      yas: 18,
      username: "haso",
      password: "123",
      ilgiAlanlari: ["oyun", "müzik", "yazılım"],
      harcamalar: [100, 20, 65, 258, 5],
      address: {
        country: "Türkiye",
        city: "Balıkesir",
      },
    },
    {
      isim: "Aras",
      soyisim: "Çalışkan",
      yas: 17,
      username: "musty",
      password: "123",
      ilgiAlanlari: ["oyun", "müzik", "yazılım"],
      harcamalar: [58, 200, 35, 58, 12],
      address: {
        country: "Türkiye",
        city: "İzmir",
      },
    },
    {
      isim: "Serpil",
      soyisim: "Öztürk",
      yas: 30,
      username: "serpil",
      password: "123",
      ilgiAlanlari: ["sinema", "tiyatro", "müzik"],
      harcamalar: [180, 250, 605, 2058, 54],
      address: {
        country: "Türkiye",
        city: "Ankara",
      },
    },
    {
      isim: "Zeliha",
      soyisim: "Çalış",
      yas: 30,
      username: "zeliş",
      password: "123",
      ilgiAlanlari: ["sinema", "astroloji", "müzik"],
      harcamalar: [1450, 220, 85, 282, 15, 20],
      address: {
        country: "Türkiye",
        city: "İzmir",
      },
    },
    {
      isim: "Selim",
      soyisim: "Bir",
      yas: 45,
      username: "selim",
      password: "123",
      ilgiAlanlari: ["tiyatro", "siyaset", "müzik"],
      harcamalar: [2580, 2000, 650, 5808, 56],
      address: {
        country: "Türkiye",
        city: "Ankara",
      },
    },
  ];

  let kullaniciGetir = ()=>{

    let kullaniciGetir = document.querySelector(".kullanici");

    for (let i = 0; i < userList.length; i++) {

        kullaniciGetir.innerHTML += ` <li> <strong> Ad:</strong> ${userList[i].isim}</li>`; 
        kullaniciGetir.innerHTML += `<hr>`;
        kullaniciGetir.innerHTML += ` <li><strong> Soyad:</strong> ${userList[i].soyisim}</li>`;  
        kullaniciGetir.innerHTML += `<hr>`;
        kullaniciGetir.innerHTML += ` <li> <strong> Yaş:</strong> ${userList[i].yas}</li>`;
        kullaniciGetir.innerHTML += `<hr>`;

        kullaniciGetir.innerHTML += ` <li><strong> Username:</strong> ${userList[i].username}</li>`;

        kullaniciGetir.innerHTML += `<hr>`;
    
        kullaniciGetir.innerHTML += ` <li> <strong> Password:</strong> ${userList[i].password}</li>`;

        kullaniciGetir.innerHTML += `<hr>`;

        kullaniciGetir.innerHTML += ` <li style = "list-style-type: none"> <strong> İlgi Alanları </strong></li>`;

        userList[i].ilgiAlanlari.forEach(x=>{

         kullaniciGetir.innerHTML += ` <li>${x}</li>`;
    
        })

        kullaniciGetir.innerHTML += `<hr>`;
        kullaniciGetir.innerHTML += ` <li style = "list-style-type: none"> <strong> Harcamalar </strong></li>`;
        userList[i].harcamalar.forEach(x=>{
            kullaniciGetir.innerHTML += ` <li>${x}</li>`;
        })
        kullaniciGetir.innerHTML += `<hr>`;
        kullaniciGetir.innerHTML += ` <li style = "list-style-type: none"><strong> Adres </strong></li>`;
        kullaniciGetir.innerHTML += ` <li><strong> Ülke: </strong>${userList[i].address.country}</li>`;
        kullaniciGetir.innerHTML += ` <li> <strong> Şehir: </strong>${userList[i].address.city}</li>`;
        kullaniciGetir.innerHTML += ` <hr style="color: red;">`;
        kullaniciGetir.innerHTML += ` <hr style="color: red;">`;
        kullaniciGetir.innerHTML += ` <hr style="color: red;">`;


    }
}


    let temizle = ()=>{

        let kullaniciGetir1 = document.querySelector(".kullanici");
        kullaniciGetir1.innerHTML = ``; 
    


    }


    



  

  

