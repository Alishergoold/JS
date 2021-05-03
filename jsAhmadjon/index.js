// MAlumot turlari

//var auto; //qiymati nomalum yani 'undifined' o'zgaruvchi
//var train = null; //qiymat berilmagan bo'sh o'zgaruvchi

//OBYEKT-------------------------
//var obj = { 
//  model: 'lacetti',
//  rang: 'oq',
//  km: 0,
//  yil: 2021,
//  manzil:{
//    shahar: 'andijon',
//    tuman: 'asaka',
//    mahalla: 'xonabod'
//  },
//  holati: 'yangi'
//}


//console.log(obj.yil)
//console.log(obj.manzil.tuman);
//console.log(obj['manzil'].shahar);
//console.log(obj['manzil']['mahalla']);
//console.log(typeof obj)


//ARRAY------------------------

//var meva = ['olma', 'anor', 4, 'nok', {narxi: 4000}, [1,2,3,4,5]];
//console.log(meva)
//console.log(meva[3])
//console.log(meva[4]['narxi'])
//console.log(meva[5][3])

//console.log(typeof meva)
//console.log(meva.length)



//for loop ----------------------------------

//for (var x = 2; x<10; x++){
//  console.log(x)
//}

//console.log(' ')

//var a = 5;
//  while (a<20){
//    if(a===10){
//    console.log('besh')
//    }else{
//      console.log(a)
//    }
//    a++;
//}


//console.log(' ')

//var y = 7
//do{
//  console.log('number ', y)
//  y++;
//}while(y<15);

//// FOR IN
//var arr = [1,2,3,4,5]
//for (var x in arr) {
//  console.log(x)  //arrey indexini chiqaradi
//}
//0
//1
//2
//3
//4

//for (var x in arr){
//  console.log(arr[x]); //arreydagi elementlarni chiqaradi
//}
//1
//2
//3
//4
//5


//var obj = {name:'Ali', age:20, phone:'1234234'}
//for(var x in obj){
//  console.log(x)   //Obyektdagi keylarni chiqarish
//}
//name
//age
//phone

//for (var x in obj){
//  console.log(obj[x]); //obyektdagidagi valuelarni chiqaradi
//}
//Ali
//20
//1234234


//FOR OF
//for (var x of obj){
//  console.log(obj[x]); //obyektdagida for of ishlamaydi
//}

//for (var x of arr) {
//  console.log(x)  //arrey elementlarining elementini chiqaradi
//}

//console.log(" ");

//var x = 8;
//while(x<10){
//  if(x===10){
//    console.log("continue");
//    continue;
//  }else{
//    console.log("number", x)
//  }
//  x++;
//}


//for (var i = 0; i<10; i++){
//  if(i===5){
//    continue;  // 1 qadam ishlamaydi
//    console.log("continue")
//  }else{
//    console.log("number is ", i)
//  }
//}



//function screens(a,b){
//  if(a===b){
//    console.log("Landscape");
//  }else{
//    console.log("Portrait");
//  }
//}
//const natija = screens(5,6);
//console.log(natija)

var str = "Salom O'zbekist\von"
//console.log(str)

var sin1 = 'Синий кит'.indexOf('Синий');   // вернёт  0
var sin2 = 'Синий кит'.indexOf('Голубой');  // вернёт -1
var sin3 = 'Синий кит'.indexOf('кит', 0);    // вернёт  6
var sin4 = 'Синий кит'.indexOf('кит', 6);    // вернёт  6
var sin5 = 'Синий кит'.indexOf('', 8);       // вернёт  8
var sin6 = 'Синий кит'.indexOf('', 9);      // вернёт 9
var sin7 = 'Синий кит'.indexOf('', 10);      // вернёт 9
var sin8 = 'Синий кит'.indexOf('к', 3);      // вернёт 9
//console.log(sin1)
//console.log(sin2)
//console.log(sin3)
//console.log(sin4)
//console.log(sin5)
//console.log(sin6)
//console.log(sin7)
//console.log(sin8)

//var sin1 = 'Синий кит'.slice('Синий');   // вернёт  0
//var sin2 = 'Синий кит'.slice('Голубой');  // вернёт -1
//var sin3 = 'Синий кит'.slice(1,6);    // вернёт  6
//var sin4 = 'Синий кит'.slice( 3);    // вернёт  6
//var sin5 = 'Синий кит'.slice('', 5);       // вернёт  8
//var sin6 = 'Синий кит'.slice('', 9);      // вернёт 9
//var sin7 = 'Синий кит'.slice('', 1);      // вернёт 9
//var sin8 = 'Синий кит'.slice(3);      // вернёт 9

//console.log(sin1)
//console.log(sin2)
//console.log(sin3)
//console.log(sin4)
//console.log(sin5)
//console.log(sin6)
//console.log(sin7)
//console.log(sin8)


//var anyString = 'Дивный новый мир новый';

//console.log('Индекс первого вхождения «й» с начала строки равен ' + anyString.indexOf('й'));
//// Отобразит 5
//console.log('Индекс первого вхождения «й» с конца строки равен ' + anyString.lastIndexOf('й'));
//// Отобразит 11

//console.log('Индекс вхождения «новый» с начала строки равен ' + anyString.indexOf('новый'));
//// Отобразит 7
//console.log('Индекс вхождения «новый» с конца строки равен ' + anyString.lastIndexOf('новый'));
// Отобразит 7

var myString    = 'бри, пеппер джек, чеддер';
var myCapString = 'Бри, Пеппер Джек, Чеддер';

//console.log('Вызов myString.indexOf("чеддер") вернул ' + myString.indexOf('чеддер'));
// Отобразит 18
//console.log('Вызов myCapString.indexOf("чеддер") вернул ' + myCapString.indexOf('чеддер'));
// Отобразит -1


var strw = 'Быть или не быть, вот в чём вопрос.';
var count = 0;
var pos = strw.indexOf('в');

while (pos !== -1) {
  count++;
  pos = strw.indexOf('в', pos + 1);
}

//console.log(count); // отобразит 3

var hello = 'Привет, ';
//console.log(hello.concat('Кевин', ', удачного дня.'));
/* Привет, Кевин, удачного дня. */

var sin8 = ' Синий кит'.repeat(5); 
//console.log(sin8)

//str.replace(regexp|substr, newSubStr|function[, flags])

var re = /яблоки/gi;
var str = 'Яблоки круглые и яблоки сочные.';
var newstr = str.replace(re, 'апельсины'); //olmani apelsinga o'zgartiradi
//console.log(newstr); // апельсины круглые и апельсины сочные.

var car = /matiz/gi;
var str = "Matiz chiroyli va matiz kamchiqim"
var newstr = str.replace(car, 'Spark');
//console.log(newstr)

var str = "Salom O'zbekiston"
str.length //property
str.indexOf("o")

//console.log(str)


//var str = "Salom O'zbekiston"
//undefined
//str.indexOf("o")
//3
//str.indexOf("lom")
//2
//str.indexOf()
//-1
//str.indexOf("g")
//-1
//str.indexOf("o", 3)
//3
//str.indexOf("o", 4)
//15

//str.search(/o/ig)  // regex

    // STRINGLARNI QIRQISH
//var sliced = str.slice() stringni qirqish
//undefined
//sliced
//"Salom O'zbekiston"
//sliced.slice(0.5)
//"Salom O'zbekiston"
//sliced.slice(0,5)
//"Salom"

//var slc = str.substr(0,5)
//undefined
//var slc = str.substr(6,8) // 6dan keyin 8 ta belgini sanaydi
//undefined

//str.substring(6,9) // 6 dan 9 gacha bo'lgan harflarni chiqaradi. manfiy son bilan ishlamaydi
//"O'z"


    //REPLACE  biror so'zni boshqa so'z bilan almashtiradi. harflarni ham o'zgartirsa bo'ladi.
//str.replace('Salom', 'Hello') // salom so'zini hello bilan almashtiradi
//str.replace(/s/i, 'Hello') // salom so'zini hello bilan almashtiradi
//str.replace('Salom', 'Hello') 
//"Hello O'zbekiston"
//str.replace(/s/i, 'Hello')    // katta kichik harfni farqi yo'q
//"Helloalom O'zbekiston"
//str.replace(/s/ig, 'Hello')   // g global barchasiga tasir ko'rsat
//"Helloalom O'zbekiHelloton"
//str.replace(/s/ig, 'Hi')
//"Hialom O'zbekiHiton"
//str.replace(/s/gi, 'h')
//"halom O'zbekihton"
//console.log(str)

    // harflarni katta kichik qilish
//str.toLowerCase()
//"salom o'zbekiston"
//str.toUpperCase()
//"SALOM O'ZBEKISTON"
//str.toLocaleUpperCase()
//"SALOM O'ZBEKISTON"
   
    // parametrga qarab Takrorlaydi
//str.repeat(2)
//"Salom O'zbekiston Salom O'zbekiston "
//str.repeat(5) 
//"Salom O'zbekiston Salom O'zbekiston Salom O'zbekiston Salom O'zbekiston Salom O'zbekiston "

//str.concat('Salom Vatanim')   // bitta stringa boshqa string qo'shishimiz mumkin
//"Salom O'zbekiston Salom Vatanim"

//var o = "   salom  "  // bo'shliqlarni probellarni qirqadi
//undefined
//o.trim()
//"salom"


//var str = "hello world"
//undefined
//str.startsWith('h') // arreyni boshini tekshiradi va boolean qiymat qaytaradi
//true
//str.endsWith("we") // arreyni oxirini tekshiradi va boolean qiymat qaytaradi
//false

//str.split(' ')     // birtirnoq ichida nimani bersak ushani ko'rishi bilan shu joyni o'zidan elementni bo'ladi
//(2) ["hello", "world"]
//str.split('o')
//(3) ["hell", " w", "rld"]
//str.split('')
//(11) ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]

//var arr = str.split('', 4) // 4 soni optional berish shart bo'lmagan ixtiyoriy parametr. 
//console.log(arr)
//(4) ["h", "e", "l", "l"]  // bizning stringimiz 4 ta indexli elementlerimizni qaytaradi. chunki optional 4 ga teng

//str.includes('w')         // biz bergan w ni string ichidan qidiradi topsa boolean qiymat qaytaradi
//true
//str.includes('w', 5)      // biz bergan w ni string ichidan 5 - elementdan boshlab qidiradi topsa yoki topmasa boolean qiymat qaytaradi
//true
//str.includes('w', 7)      // biz bergan w ni string ichidan 7 - elementdan boshlab qidiradi topsa yoki topmasa boolean qiymat qaytaradi
//false

//var num = 1000            // deyarli barcha turdagi malumot turlarini string tipiga aylantiradi
//num.toString()            // num number edi stringa aylandi
//"1000"
//var num2=num.toString()
//typeof num                // num ning tipini typeof bilan tekshirmoqdamiz
//"number"
//typeof num2
//"string"

//var n = {name: "Ali", age:22}  // obyektni boshqa yo'l bilan stringga aylantirsak bo'ladi
//n.toString()
//"[object Object]"

//str.match(/hi/)                // stringni ichidagi hohlagan elementni o'zini va sonini topishimiz mumkin
//["hi", index: 0, input: "hi my name is Alisher. hi how re you?"] 
//str.match(/hi/g)
//(2) ["hi", "hi"]               // regexp bilan hi so'zini topdik soni 2 ta.
//str.match(/name/g)
//["name"]
//str.match(/a/g)
//["a"]
//str.match(/o/g)
//(2) ["o", "o"]
//str.match(/o/gi)
//(2) ["o", "o"]
//str.match(/a/gi)
//(2) ["a", "A"]

//var arr = str.split('')
//undefined
//for(var i = 0; i<arr.length; i++){
//    console.log(arr[i])             // arrey ichidagi xar bir elementni chiqaradi
//}

//function tops(harf, soz){
//  var soni = 0 
//  var arr = soz.split('') 
//  for(var i=0; i<arr.length; i++){
//      if(harf == arr[i]){
//          soni++
//      }     
//  }console.log(soni, "Martta qatnashgan")
//}

//tops('s', 'salom')
//VM1639:9 1 "Martta qatnashgan"
//tops('s', 'salom sessss')
//VM1639:9 6 "Martta qatnashgan"


//function ol(a, harf){
//  var uzunlik = a.split('')
//  var son = 0
//  console.log(uzunlik.length)
//    for(x of uzunlik){
//        if(harf == x){ 
//        son++
//        }
//    }   console.log(son)
//}
//undefined
//ol("SALOM", "O")
//VM3336:4 5
//VM3336:9 1

function top(gap, soz){
  
}
//top("Salom do'stlar men keldim.", "men")

function min(){             // min funksiya aysaymiz
  var min = arguments[0];   // min o'z/ga berilayotgan parametrni qiymatlarini saqlaymiz
  for(x of arguments){      // qiymatlarni alohida olamiz
    if(x<min){              // x o'zgaruvchimiz min o'z/dan kichik bo'lsa
      min = x               // min o'zgaruvchimizga x ni o'zlashtir
    }else{
      continue              // aks holda katta yoki teng bo'lsa o'tkazib yubor
    }
  }console.log(min)         // konsolga min ni chiqar
}//min(1,2,3,4,5,6)         // min funksiyasini chaqiramiz
 

function arif(){              // o'rta arifmetikni topish funksiyasini yas.
  var len = arguments.length  // len o'z/ga argumentning uzunligini o'zlashtiramiz
  var yig = 0;                // yig o'zga 0 ni o'zlashtiramiz
  for(x of arguments){        // argumentni har bir elementini x qilib olamiz
    yig+=x                    // x+x=yig qilib yig o'zgaruvchisiga saqliymiz
  } 
  console.log(yig/len)       // len ni yig ga bo'lib o'rta arifmetik sonni con/ga chiqaramiz
}//arif(1,2,3,4,5,6)           // funkga parametr berib uni chaqiramiz

function arifm(){            // sonlarning ko'paytmasini topish
  var yig = 1;
  for(x of arguments){
    yig*=x 
  }
  console.log(yig)
}//arifm(1,2,3,4,5,6)

// n13 robocon
function kasal(n,k){
  var kun = 1;
  var inson = k * kun 
  var kasallangan = inson * n
  console.log(kasallangan)
}
//kasal(2,7) 

function soz(n){
  for(var x = 0; x<n.length; x++){
    console.log(n[x])
  }
}//soz("salom")


//N12 oyin robocon
function oyin(n){
  var comp = Math.floor(Math.random()*10);
    if (n>comp) {
      console.log(n,">",comp, "Ali yutdi")
    }else if (n==comp){
      console.log(n,"=",comp,"Durrang")
    }else {
      console.log(n,"<",comp,"Kompyuter yutdi")
    } 
}//oyin(6)

