// DESTRUCTURE 

/*
let arr =[2,3,4,5,6,7,8]
let [bir, ikki, uch, ...davomi] = arr
bir
2
ikki
3
uch
4
davomi
[5,6,7,8]
let [bir, ikki, uch, , ,olti, ...davomi] = arr // har bir vergul bitta elementni etiborsiz qoldiradi
olti
7
let {name, phone} = obj2
let {name, phone, age=90} = obj2 // age = 90 defolt parametr. parametr berilmagan bo'lsa 90 ni olgin degan manoda
age
90

let {name: ism, phone, age=22} = obj2

let objec = { age:33, address:"Toshkent"}
let {address:city} = objec // addressni olvol bundan kegin biz address ni city deb ishlataman.
undefined
city
"Toshkent"
*/

let student = {name:'Xasan', address='Toshkent'}
let {address} = student // key ni boshqa o'zgaruvchi bilan nomlab olib ishlatib ketamiz
//({name} = student) // bu kod faqat consolda ishlidi

let {address:joy = 'Uzbekistan'} = student
console.log(joy)
console.log(student) 