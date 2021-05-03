/*
const htmlElement = document.documentElement;  // HTML doc/dagi barcha elementlarni oladi
const headElement = document.head;             // head ni oladi
const bodyElement = document.body;             // body ni oladi
//console.log(htmlElement);
//console.log(headElement);
//console.log(bodyElement);

const sarlav = document.getElementsByTagName('h2')    // teg nomi bilan oladi
const item = document.getElementsByClassName(".item") // class nomi bilan oladi
const id = document.getElementById('id');             // id si bilan oladi
//console.log(sarlav);
//console.log(item);
//console.log(id)

// DOM . Navigatsiya po domu
// 1- va oxirgi elementni olish. body ichidagi 1-elementni va yopiluvchi bodydan bir pog'ona yuqoridagi elementni oladi
const firstElement = bodyElement.firstChild;
const lastElement = bodyElement.lastChild;
//console.log(firstElement);
//console.log(lastElement);

// childNodes bodyni ichidagi barcha elem/larni oladi va kolleksiya ko'rinishida qaytaradi
const childNodes = bodyElement.childNodes;
//console.log(childNodes)
// hasChildNodes() bizga bodyElement ning ichida el. bor yoki yo'qligini tekshiradi. boolean qaytaradi
//console.log(bodyElement.hasChildNodes())

// kolleksiyani tsikl solish
for (let node of childNodes){
 //console.log(node)
}

const previousSiblingNode = bodyElement.previousSibling; // bodyElement dan oldingi el/ni oladi
const nextSibling = bodyElement.nextElementSibling;      // bodyElement dan keyingi el/ni oladi
const parentNode = bodyElement.parentNode                // HTML ni hammasini oladi
//console.log(previousSiblingNode);
//console.log(nextSibling);
//console.log(parentNode);
const classes = bodyElement.getElementsByClassName("clas")
const main = document.getElementById("main")
const cards = document.getElementsByClassName("card")
const keyingiEl = cards.nextElementSibling;

//console.log(oldingiEl)
//console.log(keyingiEl)
//console.log(pNode)

// class selektor orqali qidirish
const elemsOne = document.querySelectorAll('.lesson__list');
//console.log(elemsOne);

// teg Selektori orqali qidirsh
const elemsTwo = document.querySelectorAll('li');
//console.log(elemsTwo);

// aralash selektor tegi va class orqali qidirish
const elemsThree = document.querySelectorAll('li.lesson__item-list');
//console.log(elemsThree)

// faqat .lesson__list ona elenti ichidagi barcha li larni qidirish
const elemsFour = document.querySelectorAll('.lesson__list>li');
//console.log(elemsFour);

// bir nechta klasslarni qidirish
const elemsFive = document.querySelectorAll('.lesson__list, .lesson__text');
//console.log(elemsFive);

// aytilgan classni .lesson__list ni ichidan faqat .lesson__text larni qidirish
const elemsSix = document.querySelectorAll('.lesson__list .lesson__text');
//console.log(elemsSix);

// id orqali qidirish
const elemsSeven = document.querySelectorAll('#listItem');
//console.log(elemsSeven)

// atribut orqali qidirish
const elemsEight = document.querySelectorAll('[data-item]')
//console.log(elemsEight)

// atribut qiymati orqali qidirish
const elemsNine = document.querySelectorAll('[data-item="85"]')
//console.log(elemsNine)

const elems = document.querySelectorAll('li');
console.log(elems[2]);

//for(const item of elems){
//  console.log(item)
//}

elems.forEach(item=>{
  //console.log(item)
});

const subList = document.querySelectorAll('.lesson__sub-list');
//const subItems = subList[0].querySelectorAll('li');
//console.log(subItems)

// birinchi uchragan .lesson__list oladi
const lessonList = document.querySelector('.lesson__list')

// id orqali qidiradi
const elem = document.getElementById('listItem');

const elemss = document.getElementsByTagName('li');

// class ni qidirish. qidirganda . yozish shartmas
const eleme = document.getElementsByClassName('lesson__item-list');

// ota elementni qidiradi
const elm = document.querySelector('.lesson__item-sub-list');
//const parentList = elm.closest('.lesson__list');
//console.log(parentList)
*/
function ozgar(){
  const colorInput = document.querySelector('#color__input').value;

  const fontSize = document.querySelector('#input__font').value;
  //console.log(fontSize)

  const cardBody = document.querySelector('.card__body');
  cardBody.style.width = "60%";

  const card = document.getElementById('cardTitle');
  const image = document.querySelector('.card__image');
  image.style.width='20%';
  card.style.color='blue';

  const cardClass = document.querySelector('.card')
  cardClass.style.backgroundColor=colorInput;
  cardClass.style.padding='20px';

  const cTitle = document.querySelector('.card__title');
  cTitle.innerHTML = "<h1>Men sarlavhaman</h1>";
  cTitle.style.fontFamily = "Arial";
  cTitle.style.fontSize = fontSize+"px";

  const cText = document.querySelector('.card__text');
  cText.innerText = "Men lorem ipsum text edim."

  const div = document.getElementsByTagName('div');
  for(x of div){
    x.style.marginBottom='30px';
  }


}

const button = document.createElement('button');
button.innerText="Men Buttonman";
const cards = document.querySelector(".card");
cards.append(button);
button.style.backgroundColor="green";
button.style.color="#fff";
button.style.padding="10px";
//nimaga pasdigi kod ishlamadi?
cards.style.cssText="font-size: 32px; color:#fff; padding:5px"

const bodyElems = document.body

function add(){
  var sarlavha = document.getElementById('title').value;  // inputning qiymatini olamiz
  var matn = document.getElementById('matn').value;

  document.getElementById("endTitle").innerHTML = sarlavha;  // endTitlega yozamiz
  document.getElementById("endText").innerHTML = matn;
}
const atr = document.getElementById('atrib')
atr.setAttribute('id', 'titles')
atr.setAttribute('class', 'class titles__color');
//const gap = innerHTML=sarlavha
const parag = atr.appendChild(document.createElement('p'));
parag.innerHTML = "Men yangi yasalgan paragrafman";

//this shu funksiyani o'ziga teng. faqat berilgan funksiya uchun ishlaydi
function yoz(matn){
  //var matn = document.getElementById('input').value;
  document.getElementById('text').innerHTML = matn.value;
}

const bTitle = document.getElementsByClassName('box__title');
const box = document.getElementById("box")
box.style.width="50%";
box.style.padding="50px";

function kirish(){
  const bText = document.querySelector('.box__text');
  bText.style.fontFamily="Arial";
  bText.style.fontSize="20px";
  bText.style.color="blue";
  bText.style.margin="15px 0px";
  bText.innerText="O'zbekiston terma jamoasi jahon chempionatiga chiqish imkoniyatidan mahrum bo'ldi. Bunga sabab ob-havo yomon kelgani bo'ldi."

  const textArea = document.createElement('textarea');
  const boxTarea = document.querySelector('#box__textarea');
  textArea.setAttribute('placeholder', 'Izoh qoldiring')
  boxTarea.appendChild(textArea);

  const bButton = document.querySelector('#box__button');
  bButton.innerHTML = "<button>Jo'natish</button>";
}

function handler1() {
  alert("Raxmat")
};

function handler2() {
  alert("Raxmat yana men.")
};

et.onclick = () => alert("Salom")
et.addEventListener("click", handler1);

elt.onclick = function(event){
  alert(event.type + " ga "+event.currentTarget);
  alert("Kordinatlari: " + event.clientX + ";" + event.clientY);
}

img.onclick = () => console.log("FOTO");
img.addEventListener("click", handler3);
//img.addEventListener("mousedown", handler2);

function handler3(event) {
  console.log("Men Bulutman",event)
  console.log(this) 
}

 
