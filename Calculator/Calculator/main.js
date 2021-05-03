var head = document.querySelector(".calc__head");
var num = document.querySelector(".calc__num");
var oper = document.querySelector("#calc__oper");
var equal = document.querySelector("#equal");
var plus = document.getElementById("plus");
var firstNumb = 0;
var secondNumb = 0;
var amal = '';

function toza() {
  head.value = '';
}

function calc(a) {
  amal = a
  firstNumb = head.value;
  head.value = '';
  console.log(a)
}

function val(event) {
  var numb = event.target.innerText;
  head.value += numb;
}

function equale() {
  secondNumb = head.value

  if(amal == '+'){
    head.value=Number(firstNumb)+Number(secondNumb)
  }else if(amal=='-'){
    head.value=Number(firstNumb)-Number(secondNumb)
  }else if(amal=='*'){
    head.value=Number(firstNumb)*Number(secondNumb)
  }else{
    head.value=Number(firstNumb)/Number(secondNumb)
  }
}