var obj = {
  name: 'Alisher',
  phone: 1234567,
  age: 31,
  adress:{
    country: 'UZBEKISTAN',
    city: 'Tashkent',
    street: 'Sohil'
  },
  cars : function(){console.log("Auto")}
}
//console.log(obj.cars())         // obyektdagi funksiyani qiymatini oldik
//console.log(obj.adress.age) 
//console.log(obj.adress.age=33)      //  obyektni qiymatini o'zgartirdim
//console.log(obj.adress.home=22)     // obyektga malumot qo'shdik
//console.log(delete obj.adress.home) // obyektdan home ni o'chirdik
//console.log(obj.adress)

function Car() {
  this.marka = "Daewoo";
  this.model = "Matiz";
  this.color = "Silver";
  this.auto = "Sedan";
  this.obje = {
    country: 'UZBEKISTAN',
    city: 'Tashkent',
    street: 'Sohil'
  }
}
var auto = new Car() // Construktor funksiya oddiy (factory) funksiyani oldiga new so'zi qo'yish orqali yasaladi va faqat construktor funksiyada this operatori ishlatiladi.
// this shu funksiyani o'zini qaytaradi
//console.log(auto.obje.street) // construktor funksiyadan malumot olish
auto.construktor // bizga auto construktor funksiyamizni qaytaradi
/ 
function Cons(name, familiya) {
  var x = {}
  x.ism = name;
  x.fam = familiya;
  x.chiqar = function() {console.log("Men chiqarman")}
  return x
}

function Cons(name, familiya) {
  this.ism = name;
  this.fam = familiya;
  this.chiqar = function() {console.log("Men chiqarman")}
}


function createList(marka, model, color, km, year, country,city){
  return{
    marka: marka,
    model: model,
    color: color,
    km: km,
    year: year,
    made: {
      country: country,
      city: city
    },
    malum: function(){console.log("Bu avtomobil O'zbekistonda ishlab chiqarilgan.")}
  }
}

var auto1 = createList("Daewoo", "Matiz", "Silver", 0+" km", 2010,"Uzbekistan", "Andijon")
var auto2 = createList("Daewoo", "Nexia", "Black", 0+" km", 2015,"Uzbekistan", "Andijon")  // Obyektdan tashkil topgan funksiya ichiga malumot qo'shvomiz va yangi obyekt olyapmiz
//console.log(auto1.malum(), auto2)

const ozgarmas = {name:'Axror'} // const proyektda bu o'zgarmas va yagona nom. ozgarmas so'zini boshqa elementlarga tenglashtirishni oldini oladi.
//console.log(ozgarmas)   // {name: "Axror"}
//ozgarmas.name="Xasan"     //  lekin constanta (const) da obyektni ichidagi malumotni o'zgartira olamiz
//console.log(ozgarmas) // {name: "Xasan"}
//ozgarmas.age=25;
//console.log(ozgarmas) // malum. qo'shish {name: "Xasan", age: 25}

var userInfo = {
  name: 'Alisher',
  phone: 1234567,
  age: 31,
  adress:{
    country: 'UZBEKISTAN',
    city: 'Tashkent',
    street: 'Sohil'
  },
  show : function showInfo() {
    console.log(`${this.name}, ${this.age} yosh. Manzil: ${this.adress.city} shahar, ${this.adress.street} ko'chasi`)
  }
}
//console.log(userInfo.show()); // obyekt ichidagi key i funksiya bo'lgan elementni qiymatini oldik


function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log("Draw")
  }
}
//Circle.construktor
//Circle.name
//Circle.apply

// REFERENCE
//var x = {val:10}
//undefined
//var y = x
//undefined
//x.val = 20
//20
//y
//{val: 20}

var obj = {name:"jon"}
var obj = {name:"jon", age:22}

for(x in obj)console.log(x)
//name
//age

Object.keys(obj)      // Eng katta obyekt hisoblanadi bu obyekt orqali biz yasagan obyektimiz ustida amallar bajarishimiz mumkin. bu obyekt kundalik ish jarayonimizdad juda keraklidir.
// C // obyektni keyini arrey holatida qaytarmoqda

Object.values(obj) 
//["age", 22]         // valueni olamiz

Object.entries(obj)   // entries metodi bilan obyektni key va value larini ikta array korinishida olamiz
//(2) [Array(2), Array(2)] //  
//0: (2) ["name", "jon"]
//1: (2) ["age", 22] 
//length: 2


// Obyektda biz qidirayotgan key bor yoki yo'qligini aniqlash usuli.
if('name' in obj){
    console.log(true)}else{console.log(false)}
//true

if('phone' in obj){
    console.log(true)}else{console.log(false)}
//false

if('age' in obj){
    console.log(true)}else{console.log(false)}
//true

if('adress' in obj){
  console.log(true)}else{console.log(false)}
//false

/*
var obj = {name:"jon", age:22}
undefined
var x = obj

undefined
x
{name: "jon", age: 22}
obj.name = "Ali"
"Ali"
obj
{name: "Ali", age: 22}
x
{name: "Ali", age: 22}
*/

//Obyektdan nusxa olish 1-eski usul faqat valuelar o'zgaradi.
var z={}
for(var key in obj){
    x[key] = obj[key]}    
//22

for(var key in obj){
    z[key] = obj[key]}    
//22

z
//{name: "Ali", age: 22}

obj.name="Axror"
//"Axror"

z
//{name: "Ali", age: 22}

obj
///{name: "Axror", age: 22}


//Obyektdan nusxa olish 2-yangi usul faqat valuelar o'zgaradi.
var q = {}
Object.assign(q, obj)    // copy qilmoqchi bo'lgan q = yangi obyekt nomi va qayerdan copy qilmoqchimiz biz obj deb ikta parametr kirgazamiz
//{name: "Axror", age: 22}
obj
//{name: "Axror", age: 22}
q
//{name: "Axror", age: 22}
obj.age = 40
//40
q
//{name: "Axror", age: 22}
obj
//{name: "Axror", age: 40}


// copy qilmoqchi bo'lgan salom obyektiga, nimalarni copy qilmoqchimiz biz obj va yana yangi obyekt qo'shamiz
var salom = {}
Object.assign(salom, obj, {phone:12312321, adress:'Tashkent'})
//{name: "Axror", age: 40, phone: 12312321, adress: "Tashkent"}
obj
//{name: "Axror", age: 40}
salom
//{name: "Axror", age: 40, phone: 12312321, adress: "Tashkent"}


//Obyektdan nusxa olish 3-yangi usul faqat valuelar o'zgaradi.
var w = {}
obj
//{name: "Axror", age: 40}
w = {...obj}                // w obyektiga obj obyektidan nusxa olamiz. obyektlarimiz qiymatlarini o'zgartirsak ham boshqa obyektga tasir qilmaydi
//{name: "Axror", age: 40}
w
//{name: "Axror", age: 40}
obj
//{name: "Axror", age: 40}
w.age = 18
//18
obj   
//{name: "Axror", age: 40}
w
//{name: "Axror", age: 18}

//garbage collection axlat yig'ish. JS o'zi avtomatik ravishda ishlatilmayotgan elementlarni yig'adi va o'chiradi

// Primitiv o'zgaruvchilar == value type => number, string, boolean,symbol,undifened,null
// o'zgaruvchidan nusxa olganda o'zninig primitiv yoki Reference type katta ahamiyat kasb etadi
// primitiv o'zgaruvchilar mustaqil o'zgaruvchilar hisoblanadi. Primitivlarni qiymati o'sha o'zgaruvchida mustaqil saqlanadi
// Primitivlardan nusxa olinganda ularning qiymatidan nusxa olinadi bu ByValue deyiladi.
let x = 10
let y = x;
x = 20;
//console.log(x, y)
//20 10

let number = 1;
function increase(number) {
  number++;
  console.log('inside: ', number);
}increase(number);
//console.log('outside', number)


// Reference type == Objekt lar => Object, function, Array
// Reference turdagi o'zgaruvchilar malum bir joyga yo'nalishni saqlaydi.
// reference turdagi o'zgaruvchilar malum bir joyga qarab turadi. qarab turilgan joyning qiymati o'zgarsa hamma joyda qiymat o'zgaradi
// Obyektlardan nusxa olinganda ularning ko'rsatkichidan nusxa olinadi buni ByReference deyiladi
let x = {value:10}  // xotiradagi manzil
let y = x;          // y = yo'nalishni o'zlashtirdi qiymatni emas
x.value = 20;       
//console.log(x, y)
//{ value: 20 } { value: 20 }


var obj = {val:1};
function increase(obj) {
  obj.val++;
  console.log('inside', obj);
}increase(obj);
//console.log('outside', obj)





// UY ishi
// 1 - adress obyektini yasash
var adress = {
  davlat: "O'zbekiston",
  shahar: "Toshkent",
  tuman: "Sergili",
  mahalla: "Shofayz",
  kocha: "Beruniy",
  uy: 25
}

// 2 - obyekt qaytaradigan funksiya yasash 2xil usulda
function createList(marka, model, color, km, year, country,city){
  return{
    marka: marka,
    model: model,
    color: color,
    km: km,
    year: year,
    made: {
      country: country,
      city: city
    },
    malum: function(){console.log("Bu avtomobil O'zbekistonda ishlab chiqarilgan.")} // shu funksiyani consolega chiqaraolmadim
  }
}

var auto1 = createList("Daewoo", "Matiz", "Silver", 0+" km", 2010,"Uzbekistan", "Andijon")
var auto2 = createList("Tayota", "Prado", "Black", 0+" km", 2015,"Japan", "Osaka") 
console.log(auto1)
console.log(auto2)

// Construktor function
function Foydalanuvchi(name,phone,age,country,city,street) {
  this.name= name,
  this.phone= phone,
  this.age= age,
  this.adress= {
    country : country,
    city : city,
    street : street
  }
}
var foydalan1 = new Foydalanuvchi('Abror',1234567,22,'UZBEKISTAN','Tashkent','Sohil')
var foydalan2 = new Foydalanuvchi('Odil',2324567,28,'UZBEKISTAN','Fergana','Olchazor')

console.log(foydalan1)
console.log(foydalan2)


//function tekshir(){
//  var objec = {color:'black', name:'Vali'}
//  var objec2 = {color:'yellow', name:'Ali'}

//  var key = Object.keys(objec)
//  console.log(key)
//  var key2 = Object.keys(objec2)
//  console.log(key2)

//  var val = Object.values(objec)
//  console.log(val)
//  var val2 = Object.values(objec2)
//  console.log(val2)


//  if(key === key2){
//    console.log("Keylar teng")
//  }else{
//    console.log("Keylar teng emas")
//  }

//}tekshir()


// Obyektlarning key va value lari teng bo'lsa true aks holda false chiqaradi

var a = {x:10, y:90};
var b = {x:10, y:90};

function CompareObjects(a,b) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if(aProps.length !== bProps.length){
    return false;
  }
  for(var i=0; i<aProps.length; i++){
    var propName = aProps[i];
    if(a[propName] !== b[propName]){
      return false
    }
  }
  return true;
}//CompareObjects(a,b)

