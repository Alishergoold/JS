function add(event){
  event.preventDefault()
  var valu = event.target.elements
  var tbody = document.querySelector('tbody');

  var values = []
  for(var elem of valu){
      //console.log(elem.nodeName)
     if(elem.nodeName != "BUTTON"){
      //console.log(elem.value)
      values.push(elem.value);
     }
  }

  function create(arr){
    if(arr[2]){
     return ("<tr><td>"+arr[0]+"</td><td>"+arr[1]+"</td><td>"+arr[2]+"</td><td>"+arr[3]+"</td></tr>");
    }
    else {
      return("<tr><td>"+arr[0]+"</td><td>"+arr[1]+"</td><td>"+"Raqam yo'q"+"</td><td>"+arr[3]+"</td></tr>");
    }
  }
  var result = create(values)
  tbody.innerHTML += result;
}