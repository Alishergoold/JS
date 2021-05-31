// class meros bo'lib o'tadi. Class lar ikki xil bo'ladi.
// let Name = class{} class expression. Bu class agar const bo'lmasa qayta yana boshqa narsaga tenglasa bo'ladi 
// factory func. constructor function this bilan ishlidi



class Person{
  constructor(name, age, phone){
    this.name = name;
    //this.ism = name
    this.age = age;
    this.phone = phone;
  }
  sayName() {
    return this.name
  }
}

let student = new Person('Ahmadjon',22,456456785)
console.log(student);
student.sayName()
let hey = student.sayName
hay.bind(student)() // hay ni ichida this funksiya borligi uchun bind metodidan foydalandik 

/*
Person.prototype.salom = 'salomlar proto'
"salomlar proto"
studdent.salom
undefined
studdent.hello
undefined
Person
class Person{
  constructor(name, age, phone){
    this.name = name;
    //this.ism = name
    this.age = age;
    this.phone = phone;
  }
  sayName() {
    return this.name
  }
}
Person.prototype.hello
"biron qiymat"
Person.prototype.salom
"salomlar proto"

*/

// SUPER - superga Personni ichidan nimani olayotganimizni aytishimiz kerak
/*
class Student extends Person{  // Student digan classimiz Person dagi malumotlarni ham extends bilan olaoladi
  constructor (name, age, phone, institute){
  super(name, age, phone)  // superga Personni ichidan nimani olayptganimizni aytishimiz kerak
  this.institute = institute;
  }
  sayInstitute(){
    return this.institute
  }
}

let tatu = new Student('Ulugbek',21, 12312312, 'TATU')
tatu
Student {name: "Ulugbek", age: 21, phone: 12312312, institute: "TATU"}
tatu.institute
"TATU"
tatu.sayInstitute()
"TATU"
tatu.sayName()
"Ulugbek"
tatu.hello
"biron qiymat"

*/

// CLASS componentlar barcha malumotlarni olib keladi.
// Function componentlar biz so'ragan malumotni o'zini olib keladi


// biz biron-bir function oldiga static yozuvini qo'ysak shu funcyion faqat ota class i bilan chaqirilganda ishlaydi(ko'rinadi)

class Student extends Person{
  constructor (name, age, phone, institute){
  super(name, age, phone)
  this.institute = institute;
  }
  static hi(){       // biz biron-bir function oldiga static yozuvini qo'ysak shu funcyion faqat ota class i bilan chaqirilganda ishlaydi(ko'rinadi)
    return 'salom bu statik metod'
  }
  sayInstitute(){
    return this.institute
  }
}
//undefined
//let tatu = new Student('Ulugbek',21, 12312312, 'TATU')
//undefined
//tatu.hi
//undefined
//Student.hi
//ƒ hi(){
//    return 'salom bu statik metod'
//  }
//Student.hi()
//"salom bu statik metod"

class Person{
  constructor(name, age, phone){
    this.name = name;
    //this.ism = name
    this.age = age;
    this.phone = phone;
  }
  static personStatic(){
    return `demak bu personStatic metod ${this.name} bu object nomi`
  }
  sayName() {
    return this.name
  }
}

//odam
//Person {name: "Dilshod", age: 44, phone: 45634535}
//odam.sayName()
//"Dilshod"
//Person.personStatic()
//"demak bu personStatic metod Person bu object nomi"

class Student extends Person{
  constructor (name, age, phone, institute){
  super(name, age, phone)
  this.institute = institute;
  }
  static hi(){
    return 'salom bu statik metod'
  }
  sayInstitute(){
    return this.institute
  }
}

//let inst = new Student('Politex', 44, 234234, "Politexnika")
//undefined
//inst.personStatic'
//VM6732:1 Uncaught SyntaxError: Invalid or unexpected token
//inst.personStatic
//undefined
//inst.sayName()
//"Politex"
//Student.hi()
//"salom bu statik metod"
//Student.personStatic()
//"demak bu personStatic metod Student bu object nomi"













