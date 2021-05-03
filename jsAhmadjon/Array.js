/*var arr = [1,2,3,4,5]              // Array ysash usuli
var arre = new Array(1,2,3,4,5)    // Array ysash usuli
console.log(arre)

arr[0]    // arreydagi 0-indeksli elementni chiqar
// 1

// ARRAY metodlari

arr.length   // elementlar sonini chiqaradi va 1 dan sanidi.

arr.toString()  // arrayni stringga aylantirish
// "1,2,3,4,5"

var a = 123
typeof a
// "number"
typeof a.toString(2)        // toStringga parametr bersak ikkilik sanoq sistemasiga o'tkazadi

console.log(arr.join(','))  // " - " elementi bilan ajratish
// 1,2,3,4,5
console.log(arr.join('-'))  // " - " elementi bilan ajratish
// 1-2-3-4-5

var fruit = ["banan", "olxo'ri", "uzum", "apelsin", "nok"]
console.log(fruit.sort())   // alifbo bo'yicha tartiblidi
// [ 'apelsin', 'banan', 'nok', "olxo'ri", 'uzum' ]

var arrey = [4,2,6,8,22,40,67,3,1]
console.log(arrey.sort())   //sort() raqamlar uchun to'g'ri ishlamaydi//sort() raqamlar uchun to'g'ri ishlamaydi
//[1, 2, 22, 3, 4,40, 6, 67, 8]

// arrayni teskari teskari ko'rinishda tartibga soladi. oxirinii boshiga, boshini oxiriga o'zgartiradi
console.log(arrey.reverse(), "sss") 
// [8, 67, 6, 40, 4, 3, 22, 2, 1]

var fruit = ["banan", "olxo'ri", "uzum", "apelsin", "nok"]

console.log(fruit.push("olma")) // ARRAY ni oxiriga element qo'shadi
//[ 'banan', "olxo'ri", 'uzum', 'apelsin', 'nok', 'olma' ]

console.log(fruit.pop())        // ARRAY ni oxirga elementini o'chiradi
//[ 'banan', "olxo'ri", 'uzum', 'apelsin', 'nok']

console.log(fruit.unshift('olma'))    // ARRAYni boshiga element qo'shadi
//[ 'olma', 'banan', "olxo'ri", 'uzum', 'apelsin', 'nok' ]

console.log(fruit.shift())            // ARRAYni boshidagi 1-elem/ni o'chiradi
//[ 'banan', "olxo'ri", 'uzum', 'apelsin', 'nok' ]
console.log(fruit)

for(var x of arrey){
  console.log(x)
}

// fruit.concat(["qulupnay", "behi", "anor"]) // fruit arrayining oxiriga parametrdagi arreyni qo'shadi 
console.log(fruit.concat(["qulupnay", "behi", "anor"]))
//['banan',"olxo'ri",'uzum','apelsin','nok', 'qulupnay','behi','anor']
console.log(fruit.concat(["qulupnay", "behi", "anor"], [1,2,3])) // yana yozsak yana qo'shadi
//['banan',"olxo'ri",'uzum','apelsin','nok', 'qulupnay','behi','anor',1,2,3]

//fruit.slice(1,3) // 1 dan 3 gacha qiriqib oladi va bizga yangi array hosil qilib beradi. 1-el/ni oladi,2-el/ni oladi 3-elementni olmaydi
console.log(fruit.slice(1,3)) // [ "olxo'ri", 'uzum' ]

var arrey = [4,2,6,8,22,40,67,3,1]
Math.max.apply(null, arrey)  // arrayni ichidan eng kattasini topadi. 1-parametr hardoim null bo'lishi kerak
console.log(Math.max.apply(null, arrey)) // 67

Math.min.apply(null, arrey)  // arrayni ichidan eng kichigini topadi. 1-parametr hardoim null bo'lishi kerak
console.log(Math.min.apply(null, arrey)) // 1

// ELEMENTLARNI O'ZGARTIRISH
var arrey = [4,2,6,8,22,40,67,3,1]
arrey[2] = 88  // arrayni 2-indexli el/ini 88 ga o'zgartirish
console.log(arrey)
//[4,  2, 88, 8, 22,40, 67,  3, 1]

arrey[arrey.length] ='oxiri' // [arrey.length] bu hardoim aarayninig oxiri bo'ladi va oxiriga Yangi malumot qo'shiladi
arrey[arrey.length] ='yana oxiri'
//[ 4, 2, 88, 8, 22, 40, 67, 3, 1, 'oxiri', 'yana oxiri' ]

delete arrey[1] // 1 el/ni o'chiramiz, lekin o'chirgan el/ni o'rni <1 empty item> yozuvi qoladi
//[ 4, <1 empty item>, 88, 8, 22, 40, 67, 3, 1, 'oxiri', 'yana oxiri' ]

arrey.splice(1,0, 'hi')  // 1 indeksdan keyin 0 ni o'chirib 'hi' ni qo'shvor
//[4,'hi',<1 empty item>,88,8,22,40,67,3,1,'yana oxiri','oxiri',]
//console.log(arrey)

arrey.splice(2,1)  // 2 dan boshlab 1 tani o'chir. yani shuni o'zini 2ni o'chir degani <1 empty item> o'chdi
// [ 4, 'hi', 88, 8, 22, 40, 67, 3, 1, 'oxiri', 'yana oxiri' ]
// delete da empty qoladi . splice da empty qolmaydi
console.log(arrey)

let names = 'Вася, Петя, Маша, Саша';
let arre = names.split(',', 2);  // 1dan hisoblaydi. ikkinchi el/dan boshlab kesib,o'chirib tashlaydi. 
for (let name of arre) {
 console.log( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}

let str = "тест";
console.log( str.split('') ); // т,е,с,т 
// [ 'т', 'е', 'с', 'т' ] arrayga aylandi

*/

/*
// 1-Topshiriq. Sonlarni tartiblash
function compareNumeric(a, b) {  // shu funksiyaga yaxshi tushunmadim
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [1, 222, 15,444,2,6,8,22,40,67,3];
arr.sort(compareNumeric);
//console.log(arr, "1-topshiriq"); 
//[1,2,3,6,8,15,22,40,67,222,444] 

var arrey = [4,2,6,8,22,40,67,3,1]
arrey.sort( (a, b) => a - b )
//console.log(arrey)
//[  1,  2,  3,  4, 6, 8, 22, 40, 67]


// 2-topshiriq. arreyni oxiridan olib boshiga taxlasin
//let are = [1,222,15,444,2,6,8,22,40,67,3];
//console.log(are.reverse())

function almash(arr, ochir){
  //var taxla = arr.sort(compareNumeric)
  //console.log(taxla.pop(), "eng katta son")
  console.log(are.splice(4,1))
}//almash(are, 5)  //oxiridan boshiga 

console.log(delete are[5])
console.log(are)
console.log(are.splice(5,1))
console.log(are)
let are = [1,222,15,444,2,6,8,22,40,67,3];
var qirqilgan = are.slice(0, 5)
//console.log(qirqilgan)

var qirqil = are.slice(6)
//console.log(qirqil)

function ochir(arr, ind){
  var joyi=arr.indexOf(ind)
  var qirqamiz = arr.slice(0, joyi)
  var qirqilgan = arr.slice(joyi+1)
  var qoshamiz = qirqamiz.concat(qirqilgan) 
  console.log(qoshamiz)
}
//ochir([1,2,3,4,5,"olma",6,7], "olma")

//var joyi=arr.indexOf(ind) 
*/

// Masalalar. Array1
var n = 5;
var arrey = [3,5,7,9,11]

//Array2
function kv(arr){
  var yig = [];
  for(x of arr){
    yig[yig.length]=(x*=x) 
    //console.log(x)
  }console.log(yig)
}//kv(arrey)

// Array 6.
var arrey = [3,4,3,5,6,6]
function yig(arr){
  var yig = 0
  for(x of arr){
   yig+= x
   //console.log(yig)
  }
  console.log(yig)  
}//yig(arrey)

// ARRAY 7.
// ARRAYni teskari chiqarish keregidi. for loop da teskari chiqdi lekin uni qanaqqib arrayga joyliman
//var ars = [1,2,3,4,5,"olma",6,7]
//function teskari(arr){
//   var qosh = []
//  for(var i = arr.length; i>0; i--){
//     qosh.push(arr[i])  
//  }console.log(qosh)
//}//teskari(ars)
//[ undefined, 7, 6, 'olma', 5, 4, 3, 2 ]

// ARRAY 8. Toq sonlarni tartib bilan chiqarish kerak. 8 9 10 masalalarni birlashtirdim
//var aralash = [4,5,7,8,6,9]

function toq(arr){
  var son = arguments[0]
  var narr = []
  for(x of son){
    x % 2 ===0 ? 'continue' : narr.push(x)
  }
  return narr.sort((a, b) => a - b )   
}


// Array 9. Arrayni, juft son bilan tarbiblangan yangi arreyni va elementlar sonini chiqarish
function juft(arr){
  var soni = arguments[0]
  var narr = []
  var tartiblangan = narr.sort((a, b) => a - b )
  for(x of soni){
    x % 2 ===1 ? 'continue' : narr.push(x)
  }
  var tartiblangan = narr.sort((a, b) => a - b ) 
 // console.log(arr+" arrey sonlari")
  //console.log(tartiblangan+" arrey juft sonlari tartiblandi. Elementlar soni", tartiblangan.length,"ta") 
  return tartiblangan  
}

// Array 10.
function jufti(arr){
  var soni = arguments[0]
  var narr = []
  for(x of soni){
    x % 2 ===1 ? 'continue' : narr.push(x)
  }
  return narr
}

var aralashgan = [4,5,7,8,6,9]
function juftToq(aral){
  var toqlar = toq(aral)
  var teskari = toqlar.reverse() 
  var juftlar = jufti(aral)
  var tartiblash = juftlar.concat(teskari)
  console.log(tartiblash)
}//juftToq(aralashgan) 

// Array 14. juft va toq indexli elementlar chiqarilsin
var arr = [1,222,15,444,2,6,8,22]

function juftToq(arr){
var nwarr = []
var narr = []
  for(x of arr){
      x % 2 === 1 ? 'continue' : nwarr.push(x)
  }console.log(nwarr)

  for(x of arr){
    x % 2 === 0 ? 'continue' : narr.push(x)
  }console.log(narr)

}//juftToq(arr)
//console.log(arr)

var list = [12, 3, 34, 56, 11, 32, 45, 11, 43]
function maxSon(arr){
  var max = Math.max.apply(null, arr)
  return max
}//maxSon(list)

// ARRAY 18. arrayni eng oxirgi elementdan eng yaqin kichik sonini chiqarish 
var massiv = [12, 3, 33, 56, 11, 32, 45, 11, 43]

function findd(arr){
  var last = arr[arr.length-1]
  var sorted = arr.sort((a,b) => a - b)
      for (var x  in sorted){
         if(sorted[x] === last){
             console.log(sorted[x-1]?sorted[x-1] : null)
         }
     }
 //     console.log(sorted, last)   
 }findd(massiv)

//array.indexOf(9, 2);
//let arrs = [12, 3, 34, 56, 11, 32, 45, 11, 43];
//console.log( arrs.indexOf(0) ); // 1
//console.log( arrs.indexOf(false) ); // 2
//console.log( arrs.indexOf() ); // -1
//console.log( arrs.includes(1) ); // true

// ARRAY 26.
// ikta ketma ket juft son kelsa 1-sini indexini chiqarish. 
var arrey = [1,2,3,4,5,6,6,7]
function jufToq(arr){  
  for(x of arr){
    if(x % 2 === 0){
      console.log(x,"Juft")
    }else{
      console.log(x,"Toq")
    }
  }
}//jufToq(arrey)

// ARRAY 65.
var arr = [2,1,3,4,6,5]
function orttir(arr,k){
  var ortgan = []
  for(x of arr){
      ortgan.push(x * k)
  }
  //var nums = parseInt(ortgan)
  console.log(ortgan)
}//orttir(arr, 3)

// ARRAY 68. elementlar o'rni almashsin
function getMaxOfArray(numArray) {
  console.log(Math.max.apply(null, numArray))
  console.log(Math.min.apply(null, numArray));
}//getMaxOfArray(arr)












