
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
const oldingiEl = id.previousSibling;
const keyingiEl = cards.nextElementSibling;
const pNode = id.parentNode;
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
const subItems = subList[0].querySelectorAll('li');
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
const parentList = elm.closest('.lesson__list');
//console.log(parentList)