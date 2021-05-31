// forEach - ishlashi for loopga o'xshash lekin malumot qaytarmaydi
let arr = [1,2,3,4,5,6,7]
arr.forEach(function (item){  // factory function
    console.log(item)
})
//VM291:2 1
//VM291:2 2
//VM291:2 3
//VM291:2 4
//VM291:2 5
//VM291:2 6
//VM291:2 7


arr.forEach((item, index) => (console.log(item, index)))
//VM491:1 1 0
//VM491:1 2 1
//VM491:1 3 2
//VM491:1 4 3
//VM491:1 5 4
//VM491:1 6 5
//VM491:1 7 6

// MAP - malumot qaytaradi
let data = [{name:'Xasan', age:22},{name:'Xusan', age:30}]

data.map(item => {
    console.log(item)
})
//VM704:2 {name: "Xasan", age: 22}
//VM704:2 {name: "Xusan", age: 30}
//(2) [undefined, undefined]
//data
//(2) [{…}, {…}]

data.map(item=>{
  return (item)
})
//(2) [{…}, {…}]
//0: {name: "Xasan", age: 22}
//1: {name: "Xusan", age: 30}
//length: 2
//__proto__: Array(0)

data.map(item=>item)  // map da return funksiyasi avtomatik ishlaydi u avt. malumot qaytaradi
//(2) [{…}, {…}]
//0: {name: "Xasan", age: 22}
//1: {name: "Xusan", age: 30}
//length: 2
//__proto__: Array(0)

data.forEach(item=>{return item})  // forEach da return funksiyasi avtomatik ishlamaydi u avt. malumot qaytarmaydi return ni o'zimiz yozishimiz kerak
//undefined
//data
//(2) [{…}, {…}]
//0: {name: "Xasan", age: 22}
//1: {name: "Xusan", age: 30}
//length: 2
//__proto__: Array(0)

data.map(item=>{ism: item[name]})
//(2) [undefined, undefined]0: undefined1: undefinedlength: 2__proto__: Array(0)

data.map(item=>({ism: item['name']}))
//(2) [{…}, {…}]0: {ism: "Xasan"}1: {ism: "Xusan"}length: 2__proto__: Array(0)


let arre = [1,2,3,4,5,6,7]
arre.forEach(function (item){
  console.log('element', item);
}) // for loopni ES6 versiyasi
//VM1133:3 element 1
//VM1133:3 element 2
//VM1133:3 element 3
//VM1133:3 element 4
//VM1133:3 element 5
//VM1133:3 element 6
//VM1133:3 element 7

arre.map((item)=>console.log('element map', item))
//VM1138:3 element map 1
//VM1138:3 element map 2
//VM1138:3 element map 3
//VM1138:3 element map 4
//VM1138:3 element map 5
//VM1138:3 element map 6
//VM1138:3 element map 7
//(7) [undefined, undefined, undefined, undefined, undefined, undefined, undefined]

let newArrey = arre.map((item)=>console.log('element map', item))
//VM1177:3 element map 1
//VM1177:3 element map 2
//VM1177:3 element map 3
//VM1177:3 element map 4
//VM1177:3 element map 5
//VM1177:3 element map 6
//VM1177:3 element map 7
//undefined
//newArrey
//(7) [undefined, undefined, undefined, undefined, undefined, undefined, undefined]

let forArray = arre.forEach((item)=>console.log(('element map', item)));
//element map 1
//VM1368:1 element map 2
//VM1368:1 element map 3
//VM1368:1 element map 4
//VM1368:1 element map 5
//VM1368:1 element map 6
//VM1368:1 element map 7
//undefined
//forArray
//undefined

let forMap = arre.map((item)=>console.log(('element map', item)));

// arrayni map qilganimizda map bizga yana bitta yangi array qaytaradi ForEach bunday qilmaydi
let forArray = arre.forEach((item)=>item)
//undefined
//forArray
//undefined // forEach dan malumot qaytmayapti

let mapArray = arre.map((item)=>item)
//undefined
//mapArray
//[1, 2, 3, 4, 5, 6, 7] // map dan malumot olmoqdamiz


arre[0]=50
//50
//mapArray
//(7) [1, 2, 3, 4, 5, 6, 7]
//arre
//(7) [50, 2, 3, 4, 5, 6, 7]
let mapArray = arre.map((item)=>item + 2)
//undefined
//mapArray
//(7) [52, 4, 5, 6, 7, 8, 9]
let mapArray = arre.map((item)=>({son:item}))
//undefined
//mapArray
//(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
//0: {son: 50}
//1: {son: 2}
//2: {son: 3}
//3: {son: 4}
//4: {son: 5}
//5: {son: 6}
//6: {son: 7}
//length: 7
//__proto__: Array(0)



// JSON PLACEHOLDER
let users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]

//users
//(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//0: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
//1: {id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", address: {…}, …}
//2: {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", address: {…}, …}
//3: {id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", address: {…}, …}
//4: {id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", address: {…}, …}
//5: {id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", address: {…}, …}
//6: {id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", address: {…}, …}
//7: {id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", address: {…}, …}
//8: {id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", address: {…}, …}
//9: {id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", address: {…}, …}
//length: 10
//__proto__: Array(0)


//map bilan malumot olish
let userName = users.map(item=>item.name)
//undefined
//userName
//(10) ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque"]
//0: "Leanne Graham"
//1: "Ervin Howell"
//2: "Clementine Bauch"
//3: "Patricia Lebsack"
//4: "Chelsey Dietrich"
//5: "Mrs. Dennis Schulist"
//6: "Kurtis Weissnat"
//7: "Nicholas Runolfsdottir V"
//8: "Glenna Reichert"
//9: "Clementina DuBuque"
//length: 10
//__proto__: Array(0)

let userName = users.forEach(item=>item.name)
//undefined 
//userName
//undefined

// FILTER asosan bizga malumotni qidirish uchun kerak

users.filter(item => item.id>5) // usersning ichidagi 5 dan katta malumotlarni chiqardik. item.id>5 shu shart true bo'lsa filter ishlaydi aks holda ishlamaydi
//(5) [{…}, {…}, {…}, {…}, {…}]
//0: {id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", address: {…}, …}
//1: {id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", address: {…}, …}
//2: {id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", address: {…}, …}
//3: {id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", address: {…}, …}
//4: {id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", address: {…}, …}
//length: 5
//__proto__: Array(0)

let filtered = users.filter(item => item.name.includes('a'))
//undefined  'a' harfi bo'lgan name larni chaqirdik
//filtered
//(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
//0: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
//1: {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", address: {…}, …}
//2: {id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", address: {…}, …}
//3: {id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", address: {…}, …}
//4: {id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", address: {…}, …}
//5: {id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", address: {…}, …}
//6: {id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", address: {…}, …}
//length: 7
//__proto__: Array(0)

let filtered = users.filter(item => item.name.startsWith('P'))
//undefined. 'P' dan boshlangan name larni chiqar.
//filtered
//[{…}]
//0: {id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", address: {…}, …}
//length: 1
//__proto__: Array(0)


function deleteByName(arr,name){
  return arr.filter(item => item.name === name )
}deleteByName(arr, "Alisher")
// shu arrayni ichida shu name ga tenglarini o'chir


function deleteByName(arr,name){
  return arr.filter(item => item.name !== name )
}
// arr dagi bir ismni o'chirish usuli

//undefined
//users
//(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//0: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
//1: {id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", address: {…}, …}
//2: {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", address: {…}, …}
//3: {id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", address: {…}, …}
//4: {id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", address: {…}, …}
//5: {id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", address: {…}, …}
//6: {id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", address: {…}, …}
//7: {id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", address: {…}, …}
//8: {id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", address: {…}, …}
//9: {id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", address: {…}, …}
//length: 10
//__proto__: Array(0)

let deleted = deleteByName(users, "Ervin Howell")
// usersda malumot o'chirishni eng optimal oson yo'li.
//undefined
//deleted
//(9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//0: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
//1: {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", address: {…}, …}
//2: {id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", address: {…}, …}
//3: {id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", address: {…}, …}
//4: {id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", address: {…}, …}
//5: {id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", address: {…}, …}
//6: {id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", address: {…}, …}
//7: {id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", address: {…}, …}
//8: {id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", address: {…}, …}
//length: 9
//__proto__: Array(0)


/*
function deleteByName(arr,name){
    return arr.filter(item => item.name !== name )
}

let updated = deleteByName(users, "Ervin Howell", "Xasan")

// find - birinchi duch kelgan 1-sini topib qaytaradi // har qanday arreyni fildini yangilash optimal usuli
function updateByName(arr,id,newName){
    return arr.map(item => item.id !== id ? item : {...item, name: newName}
    )}
    updateByName(users,3, "Xasan")
//(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//0: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
//1: {id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", address: {…}, …}
//2: {id: 3, name: "Xasan", username: "Samantha", email: "Nathan@yesenia.net", address: {…}, …}
//3: {id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", address: {…}, …}
//4: {id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", address: {…}, …}
//5: {id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", address: {…}, …}
//6: {id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", address: {…}, …}
//7: {id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", address: {…}, …}
//8: {id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", address: {…}, …}
//9: {id: 10, name: "Clementina D"}
*/

// some - bitta shart bajarilsa true. bajarilmasa false qaytaradi
users.some(user => user.name === 'Leanne Graham')
//true
users.every(user=>user.id>10)

// shartni barchasi bajarilsa true. 1 joydaham ishlamasa false qaytadi
updated.every(user=>user.id)
//true

// reduce - parametr sum-yiguvchi, param item har bir element
let olderUsers = updated.reduce( (sum, item) => item.name,[])

let olderUsers = updated.reduce( (sum, item) => sum+=item.id,0)
//undefined
//olderUsers
//52



//ARRAY from arrey yaratadi. array yasidigan metod va har bir element bilan har hil amallar bajarishimiz mumkin

let ar = Array.from('salom bu arrey buladi')
//ar
//(21) ["s", "a", "l", "o", "m", " ", "b", "u", " ", "a", "r", "r", "e", "y", " ", "b", "u", "l", "a", "d", "i"]

let ar = Array.from('salom bu arrey buladi', (item)=>item+'-harf') // amal bajarilgan holati
//ar
//(21) ["s-harf", "a-harf", "l-harf", "o-harf", "m-harf", " -harf", "b-harf", "u-harf", " -harf", "a-harf", "r-harf", "r-harf", "e-harf", "y-harf", " -harf", "b-harf", "u-harf", "l-harf", "a-harf", "d-harf", "i-harf"]

// ARRAY OF - har qanday malumot turini arrayga solib beradi
let ar = Array.of(123, 'yo')
//undefined
//ar
//(2) [123, "yo"]

let ar = Array.of(123, 'yo', [32,5,65,3], {name:"Vali"}, ()=>'a')
//undefined
//ar
//(5) [123, "yo", Array(4), {…}, ƒ]
//0: 123
//1: "yo"
//2: (4) [32, 5, 65, 3]
//3: {name: "Vali"}
//4: ()=>'a'
//length: 5
//__proto__: Array(0)


// FILL metodi arreydagi barcha malumotlarni biz parametr sifatida kiritgan ma'lumotga almashtirib qo'yadi
//[].fill('salom');
//[]
[2,3,45,3456,67,8].fill('salom')
//(6) ["salom", "salom", "salom", "salom", "salom", "salom"]

[2,3,45,3456,67,8].fill('salom', 2,5) // fillga 1-param qaysi elementga almashtirish. 2-param qayerdan boshlansin. 3-param. qayerda to'xtasin bizning misolda 2dan boshlasb 5 ingexgacha bo'lgan elemlarni almashtirsin
//(6) [2, 3, "salom", "salom", "salom", 8]








