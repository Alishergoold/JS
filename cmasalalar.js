// Abduraximov Q. C++ masalalar
//begin17
function uzunligi(a,b,c){
  var ac = c-a
  console.log("ac nuqta",ac,"m ga teng")
  var bc = c-b
  console.log("bc nuqta",bc,"m ga teng")
  var abc = a+b+c
  console.log("abc nuqta",abc,"m ga teng")
}
//uzunligi(10,24,30)

function almash(a,b){
  var b = a
  var a = b
  if(a){
    console.log(b)
  }else{
    console.log(a)
  }
}//almash(2,4)

var a = 10,
    b = 20;
var c = b;
var d = a;
console.log(c, d)

function almashtir(a,b){
  console.log(b,a)
}almashtir(2,4)


function kv(a){
  console.log(a," ning kvadrati",Math.pow(a,2)," ga teng.")
  console.log(a," ning kubi",Math.pow(a,3), " ga teng.")
  console.log(a," ning 8 darajasi",Math.pow(a,8), " ga teng.")
}
//kv(10)

// begin33
function qancha(x,a,y){
  var sum = a/x
  console.log("1 kg konfet",sum,"so'm turadi.")
  var summa = sum * y
  console.log(y, "kg konfet",summa,"so'm turadi.")
}
//qancha(10,100,2000)

//begin 34. 
function narx(x,y) {
  return x-y
}
//console.log(narx(20,5),"so'mga shokolad qimmat")

//integer1
function metr(l) {
  return l/100
}//console.log(metr(2000),"so'mga shokolad qimmat")

//filter
const filterThis = [2,4,3,5,6,7,8,9]
function filter(arr,fn){
  const filteredArr = [];
  for(let elem of arr){
    if(fn(elem)) filteredArr.push(elem);
  }
  return filteredArr;
};
//console.log(filter(filterThis, (elem) => elem % 3 == 1));

// some
const someOfThis = ['Nexia', 'Matiz', 'Gentra', 'Captiva']

function some(arr, fn){
  for(car of arr){
    if(fn(car)) return true;
  }
  return false
}
//console.log(some(someOfThis, (car) => car === 'Matiz'));

// map
const mapMe = [1000, 300,400,2333];
const map = (arr)=>{
  var pushNum = []
  for(elem of arr){
    elem = Math.floor(Math.random()*10000)
    pushNum.push(elem);
  }return pushNum
}
//console.log(map(mapMe));

//var c = 45;
//var v = c.toString();
//var arr = v.split('');
//console.log(v);
//console.log(arr);
//const num = 12345;
//const numStr = (typeof num === 'number') ? String(num) : '';
//const arr = numStr.split('');

//console.log(arr);

function find(a){
  var str = a.toString();
  var arr = str.split('');
  var nums = 0;
    for(x of arr){
      var q = parseInt(x)
      nums += q;
    }
    console.log(nums,"ffff")
}//find(452)

function arif(){              // o'rta arifmetikni topish funksiyasini yas.
  var len = arguments.length  // len o'z/ga argumentning uzunligini o'zlashtiramiz
  var yig = 0;                // yig o'zga 0 ni o'zlashtiramiz
  for(x of arguments){        // argumentni har bir elementini x qilib olamiz
    yig+=x                    // x+x=yig qilib yig o'zgaruvchisiga saqliymiz
  } 
  //console.log(yig/len)       // len ni yig ga bo'lib o'rta arifmetik sonni con/ga chiqaramiz
}//arif(1,2,3,4,5,6)           // funkga parametr berib uni chaqiramiz