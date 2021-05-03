var head = document.querySelector('.calc__head');
var num = document.querySelector('.calc__num');
var oper = document.querySelector('#calc__oper');
var equal = document.querySelector('#equal');


function val(event) {
  var numb = event.target.innerText;
  head.value = num
  console.log(event, numb)
}

function heads() {
  console.log(nums())
}


