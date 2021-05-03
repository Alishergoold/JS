//document.getElementsByTagName('h2')
//HTMLCollection(2) [h2#id, h2#matn, id: h2#id, matn: h2#matn]0: h2#id1: h2#matnlength: 2id: h2#idmatn: h2#matn__proto__: HTMLCollection
//var arr = document.getElementsByTagName('h2')
//undefined
//arr.length
//2
//for(x of arr){
//    console.log(x)}
//<h2 id=​"id">​H2 man​</h2>​
//<h2 id=​"matn">​h2 2man​</h2>​



//dom === document
var id = document.getElementById("hello");
var tagNam = document.getElementsByTagName(".item");
var arr = document.getElementsByTagName('h2');
for(x of arr){//console.log(arr)
}
var classes = document.getElementsByClassName('group');
var queryh = document.querySelector('h2')           // querySelector qidirayotgan elementni 1-uchraganini oladi
var queryt = document.querySelector('#text')
var querym = document.querySelector('#matn')
var querryall = document.querySelectorAll('.item')  // nodeList qaytaradi for of bilan elem/ga ajratamiz
for(x of querryall){//console.log(x)
}

// ELEMENTLARNI O'ZGARTIRISH
var el = document.querySelector('h2')      // innerHTML bilan element qo'shamiz
el.innerHTML = "<p>salom bu p elementi</p>" // h2 p ga o'zgardi
el.innerText = "<p>salom</p>" // tegni text deb o'ylidi.
el.innerHTML = "<div> salom bu div <span> bu span</span></div>" // dom da div uning ichida span yasaydi

//elementni atributini olamiz va o'zgartiramiz
el.id = 'id'

// elementga ga class qo'shamiz
el.setAttribute('class', 'class value')

// el ni stilini o'zgartirish
el.style.color = 'red'
el.style.border = '1px solid red'

// Dom da ellarni Qo'shish va o'chirish
document.createElement('span')  // bizga span yasab berdi
var element = document.createElement('button')
var olma = document.querySelector('.item')

el.parentNode  // el ning ona elementini topadi

var ona = document.querySelector('ul');
var bola = document.querySelector('.item')
//ona.removeChild(bola)  // ona dan bola ni o'chirdik

//ona.appendChild(document.createElement('li')) // onani oxiriga li element qo'shdik
//ona.replaceChildren('li') // hamma elementni li bilan almashtirdi

var newBola = document.createElement('li')
var newBolaText = document.createTextNode('men yangiman')
newBola.append(newBolaText)   // yangi element qo'shish
ona.replaceChild(newBola, bola)  // bola ni o'rniga new bolani joylashtirdi
ona.style.cssText="font-size: 40px; border: 3px solid green;"

// DOM EVENTS

function clickBtn(event) {
  const input = document.getElementById("name")
  console.log("Clicked", input.value)  // elementni qiymatini olamiz. qiymat faqat input elementlarida bo'ladi
  //console.log("Clicked", event.target) // event.target event parametr qilib berilgan elementni qaytaradi
}

function onInputChange(event) {
  //const input = document.getElementById("name")
  //console.log("input change",event.target.value) // event.target.value 67-qatorga o'xshab elementni o'zgaruvchiga o'zlashtirmasdan to'g'ridan to'g'ri oladi
  //console.log("input change",event.target.name)  // inputni name ni oldi. 
  // event obyekt qaytaradi. event.target element qayataradi. event.target.value inputni qiymatini qaytaradi
  console.log(event.value) // shu elementni qiymatini qaytarvotdi
}

document.getElementById("email").onclick = function () {
  console.log("Clicked email")
}

document.getElementById('pass').addEventListener('keypress', function (e){ // click hodisasiga quloq solib tur click bo'lsa func ishga tushadi
  console.log("Clicked password", e.target.value)
})

//document.getElementById("sar").addEventListener("click", idFun);
//document.getElementById("demo").addEventListener("click", myFunction);

//function idFun(){
//	document.getElementById("sar").innerHTML ="W3Schoolga salom"
//}

//function myFunction() {
//  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
//}


// preventDefault() standart bo'ladigan funksiyalarni o'zgartiradi. Standart bo'ladigan narsalarni to'xtatib qo'yadi
function submitHandler(event){
  event.preventDefault();
  console.log("prevent d", event.target.elements)
  var events = event.target.elements
  for(el of events){
    console.log(el.value.innerHTML)
  }
}