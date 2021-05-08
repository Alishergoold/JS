 // callback funksiya degani parametrga funksiya yozish tushuniladii
 // setTimeOut = belgilangan vaqtdan so'ng bajariladigan amallar
/*setTimeout(function(){
  console.log('Hello')
}, 4000)  //setTimeout() funksiyamiz bitta funksiya va millsekund parametrlarini qabul qiladi va bu funksiya parametrga berilgan vaqtdan so'ng ishga tushadi
  // yuqoridagi funksiyamiz 4 sekunddan so'ng ishga tushadi.

setTimeout(function() {
  console.log('Hello function')
  for(var i = 0; i<10; i++){
    console.log(i, "World")
  }
}, 2000) // bu funksiyamiz 2 sekunddan so'ng ishga tushadi.


var setT = setTimeout(function() {
  console.log('Hello function')
  for(var i = 0; i<10; i++){
    console.log(i, "World")
  }
}, 2000)

clearTimeout(setT) // funksiyani ishlashdan to'xtatadi
*/

// setInterval - belgilangan vaqt davomida qayta-qayta amallarning bajarilishi
var inter = setInterval(function() {
  console.log("Interval")
}, 2000);               // bu funksiya cheksiz u to'xtamasdan har 2 sekun ichida ishlayveradi. 
clearInterval(inter)    // inter funksiyamizni to'xtatdik


