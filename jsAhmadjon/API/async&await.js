let api = "https://jsonplaceholder.typicode.com/users";
let text = document.getElementById('text');
text.innerHTML = `<p>salom</p>`;
console.log(text);

async function get(url) {
  //try{
  //  const res = await fetch(url); // qandaydir malumot kevotti
  //  const data = await res.json() // JSONga aylantirdik
  //  console.log(data);
  //}
  //catch(err){
  //  console.log(err, "Error ocured"); // Xatolikni topadi
  //}
  fetch(url)
  .then((res) => res.json())
  .then((res) => {
    const ids = res.reduce((sum,i)=>[...sum, i.name], []);
    localStorage.setItem("id", JSON.stringify(ids))
    let names = localStorage.getItem('id')
    console.log(text.innerHTML = `${names}`);

  })

  .catch((err) => console.log(err))
  .finally(() => console.log("FINALLY"))
}
get(api)

// fetchni then then then qilib ishlatish promis chaining deyiladi.

/*
Object.values(user)
//(2) ["Ahmadjon", 22]
Object.entries(user)
//(2) [Array(2), Array(2)]
Object.assign(user)
//{name: "Ahmadjon", age: 22}age: 22name: "Ahmadjon"__proto__: Object
Object.freeze(user)  // Obyektni muzlatib qo'yish
//{name: "Ahmadjon", age: 22}
user.name='Ali'
//"Ali"
//user
//{name: "Ahmadjon", age: 22}
user['Ali'] = 'ism'
//"ism"

student.hasOwnProperty('name')
true

user?.address?.city // ? bo'lsa ishla bo'lmasa indama. ? belgisini qo'ymasak biz yozgan fild bo'lmasa bizga xatolik qaytvuradi
// ? belgisi REACTda ko'p ishlatiladi
*/

str = '30'
//"30"
str.padStart(5, '0') // besh xonalik son qaytaradi. oldidagi bo'sh joylarni 2-param ga berilgan qiymat bilan to'ldiradi
//"00030"


str.padEnd(5, '0') // ortiga 0 qo'yadi
//"30000"






