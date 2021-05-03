const rejvaz = document.querySelector('.rejvaz')
const rejbox = document.querySelector('.rejbox')
const checks = document.querySelector('#checks')


//function add(event){
//  event.preventDefault();
//  const inputValue = event.target.reja.value;

//  function create() {
//    block = rejbox.innerHTML = "<div class='row'><div class='rejvaz'>"+inputValue+"</div><button id='checks' class='checks' onclick='addColor(event)'>O</button><button id='checks' class='checks' onclick='addColorTwo(event)'>X</button></div>"
//    return block
//  }


//  rejbox.innerHTML += create()
//}

//function addColor(event) {
//  var arr = event.path
//  arr[1].style.backgroundColor="#095216"
//}

//function addColorTwo(event) {
//  var arr = event.path
//  arr[1].style.backgroundColor="#ad1313"
//  arr[1].remove() // hammasi o'chgandan keyin boshqattan vazifa qo'shaolmayamman
//}


function add(event){
  event.preventDefault();
  this.inputValue = event.target.reja.value;

  function create() {
    return rejbox.innerHTML = "<div class='row'><div class='rejvaz'>"+inputValue+"</div><button id='checks' class='checks' onclick='addColor(event)'>O</button><button id='checks' class='checks' onclick='addColorTwo(event)'>X</button></div>" 
  }
  rejbox.innerHTML += create()
}

function addColor(event) {
  this.arr = event.path
  arr[1].style.backgroundColor="#095216"
}

function addColorTwo(event) {
  this.arr = event.path
  this.arr[1].style.backgroundColor="#ad1313"
  arr[1].remove() // hammasi o'chgandan keyin boshqattan vazifa qo'shaolmayamman
}

