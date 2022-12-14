const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
let MenuSet = new Set(["All"]); //Navigation bar i??in kategorileri ??ekecek "set"

let MenuDOM = document.querySelector(".btn-container"); //"Navigation bar"?? eklice??imiz yeri atama
//"Navigation bar" buttonlar?? i??in style ??zellikleri
let btnStyle = `
display: inline-block;
font-weight: 400;
line-height: 1.5;
text-align: center;
text-decoration: none;
vertical-align: middle;
user-select: none;
background-color: transparent;
border: 1px solid;
padding: 0.375rem 0.75rem;
font-size: 1rem;
border-radius: 0.25rem;
color: #212529
cursor: pointer;
`;

menu.forEach(function (element) {
  //"menu" objesinden kategorileri "set"e ??ekme
  MenuSet.add(element.category);
});

MenuSet.forEach(function (element) {
  //"Set"teki bilgilerle button olu??turma
  let btnDOM = document.createElement("span"); //button i??in "span" olu??turma
  btnDOM.classList.add("btn-item"); //"class" ekleme
  btnDOM.style = btnStyle; //yukardaki "style" ??zelliklerini ekleme
  btnDOM.setAttribute("id", `${element}`); //"id" atama
  btnDOM.innerHTML = `${element}`; //buttonun i??indeki yaz??
  MenuDOM.appendChild(btnDOM); //olu??turdu??umuz buttonu ekleme
});

let foodDOM = document.querySelector(".section-center"); //Yemek listesini ekliyece??imiz yeri atama
menu.forEach(AddList); //Yemek listesini ekleyecek fonksiyon
function AddList(element) {
  let divDOM = document.createElement("div"); //burdan sonra i?? i??e yap??lar ekliyoruz (div yap??s??)
  divDOM.classList.add("menu-items", "col-lg-6", "col-sm-12"); //"col-lg-6", "col-sm-12" pencere boyutuna g??re width belirliyor
  divDOM.setAttribute("name", element.category); //sonradan kolay ula??abilmek i??in "name" atama
  divDOM.setAttribute("id", element.id); //"id" atama
  let imgDOM = document.createElement("img"); //"img" olu??turma
  imgDOM.src = element.img; //resim linki
  imgDOM.alt = element.title; //resim a????klamas??
  imgDOM.classList.add("photo"); //resim "class"??
  divDOM.appendChild(imgDOM); //"img"i "div"e ekleme (div>img)

  let infoDOM = document.createElement("div"); //Yemek bilgileri i??in ayr?? "div"
  infoDOM.classList.add("menu-info");
  let dtitleDOM = document.createElement("div"); //Yemek ismi ve paras?? i??in "div"
  dtitleDOM.classList.add("menu-title");
  let titleDOM = document.createElement("h4"); //Yemek ismi i??in yap?? ve bilgileri
  titleDOM.innerHTML = element.title;
  dtitleDOM.appendChild(titleDOM); //Ekleme i??lemi

  let priceDOM = document.createElement("h4"); //Yemek paras?? i??in yap?? ve bilgileri
  priceDOM.classList.add("price");
  priceDOM.innerHTML = element.price;
  dtitleDOM.appendChild(priceDOM); //Ekleme i??lemi

  infoDOM.appendChild(dtitleDOM); //Ekleme i??lemi

  let textDOM = document.createElement("div"); //Yemek a????klamas?? i??in yap?? ve bilgileri
  textDOM.classList.add("menu-text");
  textDOM.innerHTML = element.desc;
  infoDOM.appendChild(textDOM); //Ekleme i??lemi

  divDOM.appendChild(infoDOM); //Ekleme i??lemi

  foodDOM.appendChild(divDOM); //Ekleme i??lemi
}

let newmenu = [...menu]; //Se??ilen kategoride de??i??ecek bilgiler i??in yeni "object" olu??turuyoruz
let beforeSelected = ""; //??nceden se??ilmi?? kategorideki bilgileri silmek i??in de??i??ken (??nceki kategorinin ismini tutacak)

//Burdaki kullan??lan dinleyiciler ve "style"ler buttondaki efect i??in (Bunlar?? her button i??in ayr?? yapmak gerekiyor)
document.getElementById("All").addEventListener("mouseenter", () => {
  //Mouse ??st??ndekyen olacaklar
  document.getElementById("All").style.backgroundColor = "black"; //Arkaplan rengi
  document.getElementById("All").style.color = "white"; //Yaz?? rengi
});
document.getElementById("All").addEventListener("mouseleave", () => {
  //Mause ??st??nden ayr??ld??????nda olacaklar
  document.getElementById("All").style.backgroundColor = "transparent"; //Arkaplan rengi
  document.getElementById("All").style.color = "black"; //Yaz?? rengi
});
//A??a????daklerderde di??er kategoriler i??in
document.getElementById("Korea").addEventListener("mouseenter", () => {
  document.getElementById("Korea").style.backgroundColor = "black";
  document.getElementById("Korea").style.color = "white";
});
document.getElementById("Korea").addEventListener("mouseleave", () => {
  document.getElementById("Korea").style.backgroundColor = "transparent";
  document.getElementById("Korea").style.color = "black";
});

document.getElementById("Japan").addEventListener("mouseenter", () => {
  document.getElementById("Japan").style.backgroundColor = "black";
  document.getElementById("Japan").style.color = "white";
});

document.getElementById("Japan").addEventListener("mouseleave", () => {
  document.getElementById("Japan").style.backgroundColor = "transparent";
  document.getElementById("Japan").style.color = "black";
});

document.getElementById("China").addEventListener("mouseenter", () => {
  document.getElementById("China").style.backgroundColor = "black";
  document.getElementById("China").style.color = "white";
});

document.getElementById("China").addEventListener("mouseleave", () => {
  document.getElementById("China").style.backgroundColor = "transparent";
  document.getElementById("China").style.color = "black";
});
//(Bu i??lemi "css" ??st??nden daha kolay yap??l??yor ama sadece "js" kullanmak istedim)

document.addEventListener(
  "click",
  (
    selected //T??kland??????nda olacaklar i??in dinleyici ve fonksiyon
  ) => {
    if (selected.target.matches("span")) {
      //Sadece buttonlarda devreye girmesi i??in
      if (beforeSelected) {
        //??nceden kategori se??ilmi??se button bilgilerini silmek
        document.getElementById(beforeSelected).style.boxShadow = ""; //Bu butonun arkas??nda olu??an g??lge
      }
      document.getElementById(selected.target.innerHTML).style.boxShadow =
        "0px 0px 0px 4px #898d91"; //button g??lgesini olu??turma
      document.getElementById(selected.target.innerHTML).style.border =
        "1px solid black";

      beforeSelected = selected.target.innerHTML; //T??klanan kategori ismini sonradan ula??mak i??in de??i??kene atama
      if (beforeSelected) {
        //??nceden kategori se??ilmi??se bilgileri silme
        newmenu.forEach(function (item) {
          //??nceki listeyi silme
          let id = document.getElementById(`${item.id}`); //id atamas??
          id.remove(); //silme i??lemi
        });
      }
      if (selected.target.innerHTML == "All") {
        //'All' kategorisi i??in
        newmenu = [...menu]; //T??m yemek listesini yeni "object" e atama
        newmenu.forEach(AddList); //Ekleme fonksiyonunu ??a????rma
      } else {
        newmenu = menu.filter(function (element) {
          //'All' d??????ndaki kategoriler i??in Yemek listesini filteleme
          return element.category == selected.target.innerHTML; //Se??ilen kategoriye e??itse yeni "object"e atama
        });
        newmenu.forEach(AddList); //Ekleme fonksiyonunu ??a????rma
      }
    } else {
      MenuSet.forEach(function (element) {
        //button d??????ndaki yerlere de t??kland??????nda g??lgeyi kald??rmak i??in
        document.getElementById(element).style.boxShadow = "";
      });
    }
  }
);
