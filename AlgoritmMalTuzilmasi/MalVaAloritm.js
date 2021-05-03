var son1 = 5;
var son2 = 15;
var summa = son1 + son2;
//console.log(summa)

function katta(a,b,c){
  if(a>b && a>c){
    console.log(a, "Eng katta son.")
  }else if(a<b && b>c){
    console.log(b, "Eng katta son.")
  }else{
    console.log(c, "Eng katta son.")
  } 
}//katta(25,89,55)

//function nFakt(a,b){
//for (let i = 1; i < b; i++) {
//  console.log(a)
  
//}

//}nFakt(1, 5)

var n = 5;
var faktor = 1;
var i = 1;

for(var i = 1; i<=5; i++){
  faktor = faktor*i;
  console.log(i)
}