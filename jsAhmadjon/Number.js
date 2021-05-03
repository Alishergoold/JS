 // Number
 
 var num1 = new Number(100)         // new classidan Number() obyektini chaqirish
 var num2 = 1000000                 // number yozishni eng oddiy usuli
 var num3 = 1_000_000               // paski chiziq o'qishni osomnlashtirish uchun nollarni ajratadi 
 //var num4 = 1.23e6 = 1.23*1000000 // 1 dan keyin nechta nol kelsa shuni soni yoziladi bizning misalda 6 ta nol
 //var ms = 0.000001 = 1e-6         // e = exponensial. bu yuqoridagi misolimizni teskarisiga minusga qarab 0 larni qo'yadi

num2.toString(2) // 2 lik sanoq sistemasiga o'zgartiradi va string qilib natija qaytaradi
// Natija string "11110100001001000000"

Math.round() // 3,1 dan 3,4 gacha 3 qaytaradi, 3,5 dan 4 gacha 4 qaytaradi. yani sonni yaxlitlaydi

Math.ceil()  // 3,1 bo'lsa verguldan keyin son bo'lsa uni keyingi butun songa yaxlitlaydi. bizning misolda 3.1 sonimiz 4 ga yaxlitlanadi 

Math.floor() // 3.1 bo'lsa kichik songa yaxlitlaydi yani 3. ceilni aksi.

// Округление к ближайшему
Math.round10(55.55, -1);   // 55.6
Math.round10(55.549, -1);  // 55.5
Math.round10(55, 1);       // 60
Math.round10(54.9, 1);     // 50
Math.round10(-55.55, -1);  // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1);      // -50
Math.round10(-55.1, 1);    // -60

// Округление вниз
Math.floor10(55.59, -1);   // 55.5
Math.floor10(59, 1);       // 50
Math.floor10(-55.51, -1);  // -55.6
Math.floor10(-51, 1);      // -60

// Округление вверх
Math.ceil10(55.51, -1);    // 55.6
Math.ceil10(51, 1);        // 60
Math.ceil10(-55.59, -1);   // -55.5
Math.ceil10(-59, 1);       // -50

Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN

var sum = 0.1 + 0.2244
sum.toFixed(2)    //= 0.32 // verguldan keyin nechta son olishini parametr qilib beramiz. bu yerda verguldan keyin 2 ta sonni so'ravommiz

var num8 = "2000"
//console.log(+num8+2) // String bo'lgn sonimizni oldiga + belgisini qo'yib uni songa aylantiramiz. Stringni ichida faqat son bo'lishi kerak

// Parsing
parseInt("0199px")     // integer - butun sonlardir yani 1,4,6 -4,-7. parseint butun songa aylantiradi orqasidagi harflarni tushirib yuboradi. 
parseInt("sdsf0199px") //oldida harf bo'lsa ishlamaydi natija NaN bo'ladi 

parseFloat("3,345")                // vergulli sonlar haqiqiy sonlar dey. parseFloat bizga haqiqiy son qaytaradi
parseFloat("3,345123123asdfw")     // ishlaydi
parseFloat("asq3,345123123asdfw")  // oldida harf bo'lsa ishlamaydi
parseFloat("3,345123123asdfw").toFixed(3) // verguldan so'ng 3 ta sonni ko'rsatadi

Math.PI // PI ni qiymatini qaytaradi
Math.max(12,234,5,65,67,2) // sonlarni eng kattasini oladi
Math.min(12,234,5,65,67,2) // sonlarni eng kichigini oladi

Math.pow(4,2) // darajaga ko'tarish 16.

Math.random() // istalgan 0 dan 1 gacha bo'lgan sonni chiqaradi
//(Math.random()*10).toFixed(0) // verguldan keyingi sonlarni chiqarma

function min(a,b){
  console.log(a<b? a:b)
}//min(4,7) // minimum son topish

function max(){                   // sonlarni eng kattasini hisoblaymiz
  var max = 0;                    // argumentlar orasidagi eng katta sonni max ga o'zlashtiramiz
  for(num of arguments)           // argumentlarni ajratamiz
    max = num > max ? num : max;  // agar argumentni qiymati max o'zidan katta bo'lsa. argumentni qiymati aks holda max ni qaytar 
  return max;                     // max ni qaytar
}//max(3,4,567,678,234,645)       // parametrlar orasidagi eng katta qiymat 678


function min(){                   // sonlarni eng kichigini hisoblaymiz
  var min = arguments[0];         // eng kichik sonni argumentlar orasida olamiz
  for(x of arguments)             // argumentlarni elementlarga ajratamiz
    if(x < min){                  // agar x son min dan kichik bo'lsa 
      min = x                     // shu x sonni min ga o'zlashtiramiz   
    }else{
      continue                    // aks holda o'tkazib yuboramiz
    }
  console.log(min)                // con/ga min chiqaramiz
}//min(30,4,567,13,678,234,645)   // en kichik son 4


function arif(){                   // o'rta arifmetikni hisoblaymiz
  var uzunlik = arguments.length   // argumentni uzunligini uzunlik o'z/ga o'zlashtiramiz
  var yig = 0;                     // bizga kerakli sonni saqlash uchun yig o'zini yasaymiz
  for(x of uzunlik){               // uzunlik ichidagi har bir alohida chiqaramiz 
    yig += x                       // x ni shu x ni o'ziga qo'shib yig o'zgaruvchisiga o'zlashtiramiz.
  }
  console.log(yig/len)             // con/ga yig argumentlar uzunligiga bo'lamiz 
}//arif(1,23,45,66,23,45,4)          // parametrlar // 29.571428571428573 

function getRandomInt() {
  tKod = Math.floor(Math.random() * 10)+90;
  phone = Math.floor(Math.random() * 1e7); 
  console.log(+998, tKod, phone, "Tabriklaymiz siz boriga baraka ishtirokchisiga aylandingiz") 
}getRandomInt()


