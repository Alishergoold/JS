/* JSON malumotlar almashish uchun qo'llaniladigan format
jsonplaceholder.tyicode.com fake API. JSONda malumotlar obyektga o'xshaydi.
lekin key valuelari hammasi string turidagi malumot qaytaradi.

id takrorlanmaydi va har bir malumotni o'z id si o'zgarmaydi.

JSONga quyidagi malumot turlari bilan yaratilishi mumkin string, number, object, array, boolean, null. 
jsonga qiymat qilib FUNCTION,  DATE,  UNDEFINED   malumot turlarini yuborib bo'lmaydi.

servardan olinadigan deyarli barcha malumotlar string ko'rinishida keladi

JSON.parse(json) - bu metod orqali json malumotni js obyektga aylantiradi.

serverga malumotlarni jo'natishda barcha malumotlar string formatida bo'lishi shart

JSON.stringfy(object) - js obyektlari JSON formatga aylantiriadigan metod.
Agar obyektda funksiyalr mavjud bo'lsa bu metod funksiyalarni olib tashlaydi
*/

fetch('https://jsonplaceholder.typicode.com/users') // oddiy funksiya
  .then(function(res){
    return res.json()
  })   //then shu funksiya ishga tushib bo'lgandan so'ng degani
  .then(function(response){
    console.log(response)
  })