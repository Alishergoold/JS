// PROTOTYPE
/*
let obj ={
  name: 'Alijon',
  phone: 2323423,
  print: function(){
    return this.name  // har doim this o'zini o'rab turgan obyektga teng
  }
}
console.log(obj.print());

let cal = obj.print;
let bir = cal.bind(obj)() // obj ichidagi funksiya qiymatini olish endi ishlaydi
console.log(bir);

// ARROW function

function add(a,b){
  return a+b
}
let ad = (a,b) => a+b  // arrow funksiya sodda shaklda yoziladi
console.log(add(2,4), ad(2,4));

function tel(a){
  return a
}
let tell = a => a // agar parametr 1 ta bo'lsa paramni () larsiz yozishimiz mumkin
tel();
tell(); // natija birxil yozilishi sodda

// OBJECT literal 
let createUser = (name, phone) => ({name, phone}); // return shart emas
createUser('john', 234234234)
console.log(createUser);

//let createUser = (phone) => {phone} // ishlamaydi
let createUsers = (phone) => phone // ishlaydi
let createUserss = (phone) => {return {phone}} // {} qavslar bo'lsa albatta return yozishimiz shart. avtomatik return faqat bir qator kodda ishlaydi.
//  ko'p qatorli funksiyalar return bn ishlatiladi
createUser(234234234)

// DEFAULT parametrs
let addUser = (phone=2342342) => (phone)
console.log(addUser); // phone=2342342 serverdan phone ga malumot kelsa sererdagi malumotni qo'ygin yoki default qiymatni 2342342 qo'ygin

// PROTO
function CreateUser(name, age){
  this.name=name;
  this.age=age;
}
CreateUser.phone = 9024;
CreateUser.phone

let user1 = new CreateUser('Ahmadjon', 22);
console.log(user1);

CreateUser.prototype.address = 'toshkent'; // prototype chaining. 
CreateUser.address
let addres = user1.address
console.log(addres);
*/
// Object.prototype eng katta prototype malumot

/*
let objec ={
  name: 'Alijon',
  phone: 2323423,
}
undefined
objec.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
objec.__proto__.address = 'Toshkent' // obyektga global malumot qo'shish
"Toshkent"
objec
{name: "Alijon", phone: 2323423}
objec.address
"Toshkent" 


*/

// reference funksiya, obyekt, arrey. reference
/**/
// objectni klon qilish 1-usul
let obj = {
  name:'Alijon',
  phone: 1233123
}
let obj2 = {}
for(let element in obj){        // obyektni klon qilamiz
  obj2[element] = obj[element]
}
console.log(obj, 'obj');
console.log(obj2, 'obj2');
obj.name = "Sardor";
console.log(obj, 'obj');
console.log(obj2, 'obj2');


// objectni klon qilish 2-usul
let obj3 = Object.assign({}, obj) 
// objni malumotlarini {} yangi obj3 ga tashaber degani.
obj3.name = "Farhod";
console.log(obj, 'obj'); 
console.log(obj3, 'obj3'); 

let obj4 = Object.assign({color: 'red'}, obj) 
console.log(obj4);
console.log(obj);

let obj5 = Object.assign({name:'Alijon'}, obj) // keylari bir xil objectlar bir-biriga klon qilinganda oxirgi kiritilgan value sini oladi. bu misolda obj ni value si qaytadi
console.log(obj5);

// objectni klon qilish 3-usul
console.log(obj, 'obj');
let newObj = {...obj} // ... klon qilishni yangi usuli
console.log(newObj);
newObj.name = 'Sarvinoz';
console.log(newObj);
console.log(obj);
let newObjec={...obj, name:'Gulnoza'} // klon qilingan objectga malumot qo'shish
console.log(newObjec, 'newObjec');
