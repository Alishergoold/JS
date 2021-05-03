//var now = new Date()  // hozirgi vaqtni to'liq string qilib qaytaradi
//console.log(now)
//Sat Apr 10 2021 13:43:03 GMT+0500 (Uzbekistan Standard Time)

//now.getDate()
//10        // sana

//now.getDay()
//6         // hafta kuni

//now.getFullYear()
//2021      // hozirgi yil

//now.getMilliseconds()
//802       // millisecund

//var now = new Date(2021,4)  // yil va sanani o'zini chiqaradi
//undefined
//now
//Sat May 01 2021 00:00:00 GMT+0500 (Uzbekistan Standard Time)

//var now = new Date(2019,0)  // param bermasa hozirgi vaqt, param berilsa berilgan vaqtga boradi
//now
//Tue Jan 01 2019 00:00:00 GMT+0500 (Uzbekistan Standard Time)

// Date FORMATS
//iso - 2015-02-25
//short - 03/27/2020
//long - "march 28 2018" or "28 march 2018"
//full - "wensday march 25 2015"

//var now = new Date("2020-07-01") // 2020-07-01 shu kunga o'tgin
//now //Wed Jul 01 2020 05:00:00 GMT+0500 (Uzbekistan Standard Time)

//var now = new Date("07/01/1989") // berilgan vaqtga o'tdi
//now Sat Jul 01 1989 00:00:00 GMT+0700 (Uzbekistan Summer Time)

//var now = new Date()
//now.getDate()
//10
//now Sat Apr 10 2021 13:57:28 GMT+0500 (Uzbekistan Standard Time)
//now.getDay()
//6
//var kunlar = ["yak","du","se","chor","pay","juma","shanba","yak"]
//kunlar[5]
//"juma"

//now.getFullYear()
//2021                // yilni oladi
//now.getHours()      // soatni oladi
//13                
//now.getMonth()      // oyni oladi
//3                   // oylar 0-11 gacha sanaladi
//now.getSeconds()    // sekundni oladi
//28

//now.getTime()
//1618045048592          // 1970-01-01 dan boshlab millisekundlarni hisoblaydigan funksiya
//new Date().getTime()  //  getTime millisekundni chiqaradi
//1618045431758
//new Date().getTime()
//1618045432666

//now.setDate(11)  // berilgan parametrni millisekundga aylantiradi
//1618131448592

//new Date().getTime()
//1618045671559
//now.setTime(1618045665213)
//1618045665213
//now
//Sat Apr 10 2021 14:07:45 GMT+0500 (Uzbekistan Standard Time)
//now.setTime(1618045165213)
//1618045165213
//now.setTime(1608045665213)  // berilgan vaqtga olib bordi
//1608045665213
//now
//Tue Dec 15 2020 20:21:05 GMT+0500 (Uzbekistan Standard Time)


//now = new Date()
//Sat Apr 10 2021 14:11:37 GMT+0500 (Uzbekistan Standard Time) // shu vaqtimizni
//Date.parse(now)  // to'g'ridan- to'g'ri millisekundga o'gartirish
//1618045897000
//var millisekund = Date.parse(now)
//undefined
//millisekund
//1618045897000

//function convert(bDay){
//  var str = new Date(bDay)
//  var kun = ["yak","du","se","chor","pay","juma","shanba","yak"]
//  var day = str.getDay()
//  console.log(kun[day])
//}
//now
//Sat Apr 10 2021 14:11:37 GMT+0500 (Uzbekistan Standard Time)
//Date.parse(now)
//1618045897000
//convert(1618045897000)
//VM15202:5 shanba
//undefined    // hafta kunini qaytaruvchi funksiya

//var tKun = new Date(1989,06,02,13,03,33)
//tKun //Sun Jul 02 1989 13:03:33 GMT+0700 (Uzbekistan Summer Time)

//var tKun = new Date()
//undefined
//tKun
//Sat Apr 10 2021 14:34:35 GMT+0500 (Uzbekistan Standard Time)
//tKun.getDate()
//10
//tKun.getDay()
//6
//tKun.getMonth()
//3
//tKun.getHours()
//14
//tKun.getMinutes()
//34
//tKun.getMinutes()
//34
//tKun.getMinutes()
//34
//tKun.getSeconds()
//35
//tKun.getMilliseconds()
//907

//var d = new Date(99, 11, 24);
//document.getElementById("demo").innerHTML = d;
//Fri Dec 24 1999 00:00:00 GMT+0500 (Uzbekistan Standard Time)

//var d= 1618047475907
//var hozir = new Date(1618047475907)     // millisekundni stringga aylantirish
//console.log(d, hozir,)


//Ahmadjon Abdusamadov, [09.04.21 22:11]
//1. function(miliseconds, 'yakshanba') => o'zgartirilgan kun
//2. function(miliseconds,  14) => o'zgartirilgan sana
//3. function(miliseconds, 2025) => o'zgartirilgan yil
//4. function(string format, 'vaqt kun, sana, oy, yil') => o'zgartirilgan 
//5.  function(miliseconds yoki string format) => Salom siz shu sanada shu kuni shu yili shu soatda tug'ilgansiz
//6.  function(miliseconds=mentug'ilgan vaqt, milisconds=do'stim tug'ilgan vaqt) =>  kimni yoshi katta va qanchaga

var vaqt = new Date(1618045897000)
//console.log(vaqt) //2021-04-10T09:11:37.000Z

//1. function(miliseconds, 'yakshanba') => o'zgartirilgan kun
function kun(vaqt,kun){
  var strDate = new Date(vaqt)
  var result = strDate.setDate(kun)

  console.log(result)
}//kun(1618045897000, 0)
// kunni o'zgartira olmadim


//2. function(miliseconds,  14) => o'zgartirilgan sana
function sana(a,b){
  var dat = new Date(a)
  dat.setDate(b)
  console.log(dat)
}
//sana(1618045897000, 12)

//3. function(miliseconds, 2025) => o'zgartirilgan yil
function yil(a,yil){
  var dat = new Date(a)
  dat.setFullYear(yil)
  console.log(dat)
}
//yil(1618045897000,1995)

//4. function(string format, 'vaqt kun, sana, oy, yil') => o'zgartirilgan 
var d = new Date()
function year(a){
  a.setFullYear(2002)
  a.setMonth(2)
  a.setDate(4)
  a.setHours(1)
  a.setMinutes(36)
  a.setSeconds(39)
  console.log(a.toUTCString())     // DATE FORMATS Universal format
  console.log(a.toDateString())   // 
  console.log(a.toLocaleString())
  console.log(a.toLocaleTimeString())
  console.log(a.toLocaleDateString())
  console.log(a.toTimeString())
  console.log(a.toISOString())    //
}//year(d)

//5. function(miliseconds yoki string format)=>Salom siz shu sanada shu kuni shu yili shu soatda tug'ilgansiz
function bDay(a){
  console.log("Siz",a.getFullYear(),"yil", a.getMonth()+"-oyda",
   a.getDate()+"-sanada haftaning", a.getDay()+"-kuni tug'ilgansiz")
}//bDay(d)

var now = new Date()
function bDay(a){
  var yil = a.setFullYear(1999)
  var y = new Date(yil).getFullYear()
  var oy = a.setMonth(6)
  var o = new Date(oy).getMonth()
  var oylar = ["January","February","March","April","May","June","July"]
  var sana = a.setDate(4)
  var s = new Date(sana).getDate()
  var k = a.getDay(0)
  var kun = ["yakshanba","du","se","chor","pay","juma","shanba","yak"]
  console.log("Siz",y+"-yil",s+"-"+oylar[o]+"da","haftaning",kun[k],"kuni tug'ilgansiz")
 }//bDay(now)

//6.function(miliseconds=mentug'ilgan vaqt, milisconds=do'stim tug'ilgan vaqt) =>  kimni yoshi katta va qanchaga

var mTkun = new Date(1989,08,08)
var dTkun = new Date(1999,10,10)
//console.log(mTkun, dTkun)

function farqi(men, dos){
  console.log(arguments[men])
}
//farqi(mTkun, dTkun)

function farq(m, d){
  var mmillis = m.getTime()
  var dmillis = d.getTime()
  var mYilim = m.getFullYear()
  var dYilim = d.getFullYear()
  var farqi = Math.abs(mYilim - dYilim)
  var oFarq = Math.abs(m.getMonth()-d.getMonth())


  if(mmillis<dmillis){
    console.log(Math.abs(mmillis-dmillis), "men katta millisekund farq.")
  }else if(mmillis==dmillis){
    console.log(0, " farq yo'q, yosh teng")
  }else{
    console.log(Math.abs(dmillis-mmillis), "do'stim katta millisekund farq.")
  }
  //console.log(mmillis, dmillis, farqi)
  console.log(farqi, oFarq)
}
//farq(mTkun, dTkun)
