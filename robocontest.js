//Robocontest

function qosh(a,b){
  return a+b
}       
var x = qosh(2,3);
//console.log(x)


function katta(a,b){
  if(a>b){
    return ("a>b")
  }else if(a<b){
    return ("a<b")
  }else{
    return("a=b")
  }
}
//console.log(katta(1,12))


function gilam(a,b){
  return a*b
}
var gil = gilam(8,7);
//`console.log(gil)


var arr = [1,2,3,4,5]

function salom(x){
  for (var i of x){
    if(i === x[7]){
      console.log(i, "iiiiiiiiii")
      break
    }else{
      console.log("Bunday indexli son mavjud emas")
      break
    }  
  }
}
//salom(arr)


function hi(){
  return "hi"
}
var fun = hi()
//console.log(fun)

var y = 18;
function iff(x){
  //if(y>=x){
  //  console.log("Voyaga yetmagan")
  //}else{
  //  console.log("Voyaga yetgan")
  //}
  //y>=x ?  console.log("Voyaga yetmagan") : console.log("Voyaga yetgan");
}
//iff(25)

var arrey = [10,11,20,18, "salom",30,4,50]

function yosh(x){
  var c = 18;
  for(i of x){
    //if (i = typeof string){
    //  console.log(i, "String");  
    //}
    if (i===c){
      console.log(i, "Voyaga yetgan");
    }else if (i<=c){
      console.log(i, "Voyaga yetmagan");  
    }
    else{
      console.log(i, "Voyaga yetgan");
    }
  }
}
//yosh(arrey);
//i=salom bo'lganda consolga String yozuvi chiqsin


var v = [50, 60,75,78,80,82,84,86,90,95,100,110,120,130];
function jarima(v){ 
  for(z of v){
    if(z<70){
      console.log(z, "tezlik uchun jarima 0 sum")
    }else if((z>=70) && (80>z)){
      console.log(z, "tezlik uchun jarima 80sum")
    }else if((z<=80) && (90>z)) {
      console.log(z, "tezlik uchun jarima 90sum")
    }else if((90<=z) && (z<100)) {
      console.log(z, "tezlik uchun jarima 100sum")
    }else if((100<=z) && (z<110)) {
      console.log(z, "tezlik uchun jarima 110sum")
    }else{
      console.log(z, "tezlik uchun jarima 1000sum")
    }
  }
}
//jarima(v)

function check(name,age,car){
    console.log(name, age,car)
}
//check("Ali",32,"matiz")


for(var i = 15; 5<=i; i-=2){
  //console.log(i)
}
var arrey = [10,11,20,18, "salom",30,4,50]

for (let i = 0; i < arrey.length; i+=2) {
  const element = arrey[i];
 // console.log(element);
  //1ta qadam tashab o'tadi
}

for (let i = 10; i > 5; i--) {
 // console.log(i);
}

//var x = 0;
//while(x<=10){
//  console.log(x);
//  x++
//}


//do{
//  console.log(x, 'dooooooo');
//  x++
//}while(x <= 10) 

function list(oxiri) {
  var x = 0;
  //do{
  //  console.log(x, 'dooooooo');
  //  x++
  //}while(x <= 10)

  //while(x<=oxiri){
  //  (x, 'dooooooo');
  //  x++
  //}
  for (var i=0; i<=oxiri;  i++) {
    //console.log(i)
  }
}
//list(5)

// HOISTING funksiyamizni faylimizning yuqorisigaga 
// opchiqib keyin tekshirish demakdir. bu holat hoisting uchrash deyiladi

function hello(){
  console.log("Function Declaration")
} // function declaration hoistinga uchraydi
//hello()

var hi = function(){
  console.log("Function Expression")
} // function expression hoistinga uchramaydi, chunki bu 
  // funksiya o'zgaruvchiga o'zlashtirilgan
//hi()

// Funksiyani 3 xil usulda chaqirish mumkin
// 1)hi()  2)eventlar bilan  3)funksiya o'zini o'zi chaqiradi

// 3) funksiya o'zini o'zi chaqiradi
//(function(){
//  console.log('anonymos');
//})()

function argum(a,b,c,d){
  console.log(arguments[3])  // arguments - arreyning index va qiymatlarini chaqiradi
}
//argum(1,2,2,4)

//№0021. Partalar robocon
function parta(a,b,c){
  var parta = (a+b+c)/2
  console.log(parta, " ta parta kerak.")
}//parta(22,14,28)

//№0022. Ikki xonali sonning birinchi raqami
function bSon(a){
  var b = Array.from(String(a), Number);
  console.log(b[b.length-1])
}//bSon(4323423633) // parametrning oxirgi elementini oladi

//№0024. Vaqtlar oralig'i
function bSon(a){
  var b = a.toString().split('');
  console.log(b[b.length-1])
}bSon(4323423633) 

var arr =[222,24,22]

function katta(a){
  var son = a[0];
  for(var x of a){
    if (x > son) {
      son = x 
    }else{
      continue
    }
  }
    console.log(son)
}//katta(arr)

  //if(a>b && a>c){
  //  console.log(a)
  //}else if(a<b && c<b){
  //  console.log(b)
  //}else{
  //  console.log(c)
  //}

