let api = "https://jsonplaceholder.typicode.com/users";

async function get(url) {
  //try{
  //const res = await fetch(url);
  //const data = await res.json();
  //console.log(data);
  //}
  //catch(err){
  //  console.log(err, "error");
  //}

  fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("FINALLY"))

}
  
get(api)

