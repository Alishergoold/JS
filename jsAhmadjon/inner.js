//  1 - TOPSHIRIQ.

// 1.Ikkita haqiqiy a va b sonlari berilgan bo´lsin. Ularning yig‘indisi, ayirmasi va ko‘paytmasini toping.
//var a = 2, 
//b = 3,
//c = a + b,
//d = a - b,
//e = a * b;
//console.log(e)

//function func(a,b){
//  console.log( a + b, a*b, a-b )
//}

//2. Ikkita haqiqiy a va b sonlari berilgan bo´lsin. Ularning o’rta arifmetig 
//va o’rta geometrigini toping. SOS O'rta geometrigini topomadim
//var a = 20, 
//b = 33,
//c = (a+b)/2;
//console.log(c)

//function arif(a,b){
//  return (a+b)/2
//}
//console.log(arif(20,30))

//3.Tomonlari a va b haqiqiy musbat sonlar bo’lgan to’g’ri to’rtburchakning yuzini toping.
//var a = 10,
//b = 20,
//s = a * b; 
//console.log(s) 
//function yuza(a,b){
//  return a * b
//} 
//console.log(yuza(20,30))

//console.log("Tomonlari "+yuza(a)+"sm "+"va"+yuza(b)+"sm bo'lgan to’g’ri to’rtburchakning yuzi "+
//  yuza(20,30)+"sm kvadratga teng")  // a va b parametrlarini alohida olib yozishni bilmadim.

// 4. x va y haqiqiy sonlar berilgan bo‘lsin.Shu sonlarning eng kattasini toping.
//var x = 24,     
//y = 8;
//if(x>y){
//  console.log(x + ' x son katta.')
//}else {
//  console.log(y + ' y son katta.')
//}
////functionga joylashtiramiz
//x>y?console.log(x + ' x son katta.'):console.log(y + ' y son katta.');

// 5. x va y haqiqiy sonlar berilgan bo‘lsin.Shu sonlarning eng kichigini toping.
//var x = 1,     
//y = 8;
//if(x<y){
//  console.log(x + ' x son kichik.')
//}else{
//  console.log(y + ' y son kichik.')
//}

// 6. x va y haqiqiy sonlar berilgan bo‘lsin.Shu sonlarning eng kichigini
// noll bilan kattasini 1 bilan almashtiring.
//var x = 11,     
//y = 8;

//x>y ? console.log('1'):console.log('0');
//x>y ? console.log('0'):console.log('1');

//if(x>y){
//  console.log('1');
//}else if (x<y){
//  console.log('0');
//}

//if(x>y){
//  console.log('0');
//}else if (x<y){
//  console.log('1');
//}

// 7. x, y va z haqiqiy sonlar berilgan bo‘lsin. Shu sonlarning eng kattasini toping.
//var x = 14,     
//y = 9,
//z = 18;

//if((x>y)&&(x>z)){
//  console.log(x + ' x son katta.')
//}else if((y>x)&&(y>z)) {
//  console.log(y + ' y son katta.')
//}else {
//  console.log(z + ' z son katta.')
//}

////if((x<y)&&(x<z)){
////  console.log(x + ' x son kichik.')
////}else if((y<x)&&(y<z)) {
////  console.log(y + ' y son kichik.')
////}else {
////  console.log(z + ' z son kichik.')
////}

////Ahmadjon Abdusamadov, [22.03.21 22:17]
////1. CheckSpeed function
////Speed limit = 70 => ok
////5 -> 1 point; ( limit = 72 => still ok )
////Speed limit = 75  => point: 1
////2. Show ODD and EVEN numbers
////3. CountTruthy function takes an array and returns the number of truthy value

//// 2-topshiriq.
//function FindMax(a,b){
//  if(a>b){
//    return a;
//  }else{
//    return b;
//  }
//}
//const result = FindMax(14,6)
//console.log(result)

//function screens(a,b){
//  if(a===b){
//    return console.log("Portrait");
//  }else{
//    return console.log("Landscape");
//  }
//}
//screens(15,15);

let result = FizzBuzz(5); 
//console.log(result) 

function FizzBuzz(x){
  if(typeof x !== 'number')
    return "Son emas";
  
  if((x % 3 === 0)&&(x % 5 === 0))
    return ("FizzBuzz");

  if(x % 3 === 0)
    return ("Fizz");
  
  if (x % 5 === 0)
    return ("Buzz");
  
  console.log(x)
  return(x);
}  

////1. CheckSpeed function
////Speed limit = 70 => ok
////5 -> 1 point; ( limit = 72 => still ok )
////Speed limit = 75  => point: 1

//function CheckSpeed(speed){
//  var limit = 70,
//  point = 5;
//  if(speed<limit+point){
//    console.log("OK!")
//  }else{
//    var points = (speed-limit)/5;
//    if(points>=12){
//      console.log("Guvohnomadan ayrilding!!!")
//    }else{
//      console.log("Seni pointing " + points + " jarimang " + points*20000)
//    }
//  }
//}
//CheckSpeed(60)
//CheckSpeed(80)
//CheckSpeed(180)
//CheckSpeed(90)

//2. Show ODD and EVEN numbers

function nums(x){
  if(x%2===0){
    //console.log("Juft son");
  }else{
    //console.log("toq son");
  }
}
//nums(44)

//3. CountTruthy function takes an array and returns the number of truthy value
var arr = [34, 2, 'men', null, 'salom', undefined, false];

function numb(arr){
  for( y of arr ){

    if(y){
      //console.log( y + "  true")
      
    }else{
    //console.log( y + "  false")
    }
  }
}
//numb(arr)

//for (var o in obj){
//  var b = obj[o];
//  console.log("Obyektning kaliti " + v.toUpperCase() + " ga. " + " Obyektning qiymati " + b + " ga teng.")
//}

////for loop bilan bajaramiz

//function CountTruthy(){
//  for (var o in obj){
//    var b = obj[o]
//    var v = o
//    //console.log("Obyektning kaliti " + v.toUpperCase() + " qiymati " + b)
//  }
//}

//2. Функция Сумма кратных 3 и 5 берет номер (10) кратные числа 3: 3, 6, 9 => 18
//кратные числа 5: 5, 10 => 15
//возвращает сумму => 33

function sum(x){
  var result = 0;

  for(var i=1; i<=x; i++){
    
    if(i%3===0){
      result += i
      //console.log("3 ga bo'linadigan", i)
    }
    if(i%5===0){
      //console.log("5 ga bo'linadigan", i)
      result += i
    }
    //console.log(result)
  }
  return result
}
//console.log(sum(10));

//3. Функция CountTruthy принимает массив и возвращает число правдоподобного значения
//var obj = {
//  name:"Vali",
//  age:21,
//  phone:12323423,
//  car:"gentra"
//}

function CountTruthy(object){
  for(x in object){
    //console.log(object[x])
    if(!object[x]){
      console.log(x, ' True')}
    //}else{
    //  //console.log(x, ' False')
    //}
  }
}

//CountTruthy({name:' ', age:22, car:null, isLike:false, married:undefined, })

//4.Grade function принимает массив меток [ 80, 39, 90 ].
//Авараж => 70 
//1-59 => F
//60-69 => D
//70-79 => C
//80-89 => B
//90-99 => A

var arr = [ 80, 39, 90 ];

//for(x of arr){
//  console.log(x)
//}

//for(x in arr){
//  console.log(arr[x])
//}

//for(var i = 0; i<arr.length; i++){
//  console.log(arr[i])
//}

//function Grade(met, soni){
//  var sum = 0;
//  for(x of met){
//  }
//  console.log(soni)
//  }
//Grade(arr)

// funksiya, forloop, if else bilan ishlash

//var arrey = ['olma', 'anor', 'behi', 'nok']

//var objects = {name:'Vali', phone:undefined, age:30, married:false}

//function findValue(y){
//  for(x in y){
//    if(x===30){
//      console.log("U 30 yosh.")
//    }
//    if(x==='Vali'){
//      console.log("Uning ismi Valijon.")
//    }
//    console.log(y[x])    
//  } 
//}
//findValue(objects)

//function numsi(x){
//  for(var i=1; i<x; i++){
//    if(i%2===1){    
//      console.log(i)
//    }
//  }
//}
//numsi(10)

//5. шоу Функция "Пуск" принимает номер 
//например: showStart(3)
//*
//**
//***
//function showStart(x){
//  for(var i=1; i<=x; i++){
//    var y = '*';
//    console.log(y)
//    if(i===y){      
//    }
//  } 
//}
//showStart(4)

var k = 5;
for(var n = 0; n<10; n++){
  k = n
  //console.log(k)
}

//for sikl operatoriga oid masalalar dastur.uz
function nums(a,b){
  for(var a; a<=b; a++){
    //console.log(a, "bbbbbbb")
    // 2 bilan 10 ning orasida nechta son borligin chiqarish kere
  }
}
nums(2,10)

function narxi(a,b) {
  //console.log(a, "kg konfetni narxi", a*b, "so'm.")
}
narxi(20,100)

function narx(a,b) {
  //console.log(a, "kg konfetni narxi", parseFloat(a*b), "so'm.")
}
narx(0.1,100)

// For7  masalani ko'rish


var str = ["men","sen","u","biz","ular"]

for (n of str){
  if(str.length>str[n]){
   // console.log(slice(str[1]))
  }else{
    //console.log(str)
  }
}

function ol(a, harf){
  var soz = a.split('')
  var son = 0
     for(x of soz){
       if(x == harf){
      son++              
      }     
    }console.log(son)    
 }
 //ol("hello hi", "l") // l harfini qidirmoqda va nechta bo'lsa sonini chiqarmoqda

function ol(a,harf){
  var soz = a.split('')
  var son = 0
  for(x of soz){
    if(x== harf){
      son++
    }
  }console.log(son)
}
//ol("hello hi", "h")


var arr = ["nexia", "Damas", "Damas", "Damas", "captiva"]  // arrey yasaymiz  
 
function topsin(a){         // topsin f/ni yasab a ni parametr qilib olamiz
  var son = 0               // son o'zgaruvchisini 0 ga tenglaymiz
  for(x of a){              // a p/ning ichidagi xar bir x elementni alohida chiqaramiz
    if(x=="Damas"){         // agar x Damas ga teng bo'lsa
      console.log("Damas")  // consga Damas ni chiqar
      son++                 // Damas ni nechchi martta topsa sonini sanab boradi
    }
  }//console.log(son)       // consga son ni chiqar
}//topsin(arr)              // topsin f/ga arr arrey ni parametr qilib beramiz
// damas damas damas , 3    // natija


function gap(a){                // gap degan funktsiya yasadik
  var sozla = a.split(" ")      // a parametrga berilgan stringni arreyga aylantiramiz va sozla o'zgaruvchisiga o'zlashtiramiz
  console.log(sozla.length)     // consolga sozla ni uzunligini (nechta elementdan iboratligini) chiqaradi
  }//gap("Captiva")             // gap funktsiyasiga Captiva stringini parametr qilib uzatamiz va funksiya bizga>>
                                // >> Captiva stringida qancha element borligini sanab beradi natija 7 ga teng.

function gap(a){
  var mashinalar = a.split("")
  console.log(mashinalar.length)
}//gap("Mashinalar asdas asd asdas dss")

function topili(soz, qidir){                       // topili funksiyasini yasaymiz 2ta parametr beramiz
  var result = soz.includes(qidir)                 // result o'zgaruvchisiga soz parametrdan, qidir parametrga berilgan so'zni topib ber 
  result ? console.log("Ha") : console.log("Yo'q") // agar qidirilayotgan so'z topilsa consolga ha ni chiqar, aks holda yo'q chiqsin 
}
//topili("men toqqa chiqdim", "toqqa") // toqqa sozini string ichidan qidirmoqda


function topil(gap, soz, yangi){      // topil f/ni yasaymiz 3 ta parametr beramiz
  var reg = new RegExp(soz, "g")      // reg o'zgaruvchisiga soz ni, regexp global qilip o'zlashtiramiz  
  var result = gap.replace(reg,yangi) // result o'zgaruvchisiga gap parametrdagi bir so'zni o'rniga boshqa so'z qo'yamiz 
  console.log(result)                 // consolga result ni chiqaramiz
}
//topil("men toqqa chiqdim", "men", "sen") // men sozini sen soziga almashtirmoqda

function topil(gap, soz, yangi){
  var reg = new RegExp(soz, "g")
  var result = gap.replace(reg, yangi)
  console.log(result)
}//topil("men toqqa chiqdim", "men", "sen") // men sozini sen soziga almashtirmoqda

var cars = ["Nexia", "Damas", "Matiz", "Gentra", "Captiva"]

function olamiz(cars, auto, auto2){
  for(car of cars){
    if(car == auto2){
      var rep = car.replace(car, "Lada")
        console.log(rep)
    }else if (car == auto){
      var reps = car.replace(car,"Spark")
        console.log(reps)
    }else{
      console.log("Bunday avtomobil yo'q")
    }
 }
}
//olamiz(cars, "Matiz", "Captiva")


//Foydanaluvchidan ismi, familiyasi, tug'ilgan yili, tug'ilgan joyi, email manzili va telefon raqamini qabul qilib,
//lug'at ko'rinishida qaytaruvchi funksiya yozing. Lug'atda foydalanuvchu yoshi ham bo'lsin. Ba'zi argumentlarni 
//kiritishni ixtiyoriy qiling (masalan, tel.raqam, el.manzil)

function kirit(ism, fam, tug, joy){
  var obj = {
    name: ism,
    surname: fam,
    birthday: tug,
    adress: joy
  }
  console.log(obj);
}
kirit("Alisher", "Raximov", 02, "Toshkent")
kirit("Alisher", "Abduraximov", 02, "Toshkent")
kirit("Sherbek", "Raximov", 14, "Samarqand")

//Yuqoridagi funksiyani while yordamida bir necha bor chaqiring, va mijozlar degan
//ro'yxatni shakllantiring. Ro'yxatdagi mijozlar haqidagi ma'lumotni konsolga chiqaring.

//var a = 1;
//  while (a<6){
//    console.log(a)
//    a++;
//}