// REST 
function max(bir, ikki, ...qolgani){ // bir, va ikkidan keyingi parametrlarni alohida arrey qiladi
  console.log(bir, ikki, qolgani);
}max(1,2,3,4,5,6,7)
// rest - qolgani degani
// rest faqat funksiyalar parametrlarida ishlatiladi
// rest ni parametrlarni oxiriga qo'yish kerak
function maks(...rest){
  console.log("hello", rest, "byby");
}maks(1,2,4,5,6,7,8)
// hello [1,2,4,5,6,7,8] salom

// ARGUMENTS. Funksiyadagi barcha parametrlarni oladi
function args(a, b, ...rest){
  console.log("hello","salom", arguments, "byby");
}args(1,2,4,5,6,7,8)
// hello [1,2,4,5,6,7,8] salom

/*
// SPREAD operator arrey va obyektlar uchun ishlatiladi
var arr = [1,2,3,4,5,7,8,9,1,3,3,5,6,55,78,9,];
var arr2 = ['salom', 22, null, ...arr, 'tugadi'] // arr ni elementlarini olib kelib arr2 ga to'kadi
//console.log(arr2)
var arr3 = [...arr2] // arreyni klonlash
console.log(arr2);
console.log(arr3);
arr2[0]='salom';
console.log(arr2);
console.log(arr3);

var obj = {name:"ALI", phone:23423423}
let user = {age: 22, ...obj}
console.log(user, 'user');
// {age:22, name:'ALI', phone:23423423} obj ni user ni ichiga to'kdik

let user2 = {...user, name:'Xasan'};
console.log(user, 'user'); 
// {age:22, name:'ALI', phone:23423423}
console.log(user2, 'user2');
// {age:22, name:'Xasan', phone:23423423}
console.log(user);
// {age:22, name:'ALI', phone:23423423}
*/

// DESTRUCTURE 
var obj = {name:"ALI", phone:23423423}
let user = {age: 22, ...obj}
let user2 = {...user, name:'Xasan'};
//console.log(user);
const {age, name} = user;  // {user:"age", user:"name"}
let user3 = {...user2, phone: 23423423, adress:"uzb", color:"red"}
let {phone, color, ...rest} = user3; // phone va colordan boshqa hammasini clg ga chiqar.
//console.log(phone, color, rest, 'rest');

var arr = [1,2,3,4,5,7,8,9,1,3,3,5,6,55,78,9,];
let [bir, ikki, uch, ...davomi] = arr;
//console.log(davomi); // arr dagi 3 ta parametrdan tashqari hamma malumotlarni chiqar.

/*
let studdent = { name:'Ahmadjon', address:undefined}
undefined
ky = 'firstName'
"firstName"
let {name:firstName = 'User'} = studdent
undefined
firstName
"Ahmadjon"

let obj = {
    name:'Alisher',
    age: 30,
    address:'Tashkent'}
undefined
let {[ky] : yosh = 32} = obj
undefined
obj.yosh
undefined
ky = 'age'
"age"
let {[ky] : yosh = 32} = obj
undefined
ky
"age"
age
22


*/ 

