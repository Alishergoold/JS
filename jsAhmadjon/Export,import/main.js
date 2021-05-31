 /*
//import Get from './fetch.js'; // default modul faqat bitta funksiya, class export qilish mumkin
import Get, {User, add} from "./fetch.js";
import {func} from "./constants.js";

console.log(add(1,2));
console.log(User);
console.log(Get);
console.log(func);

var film = document.querySelector("#film");

function clearCoor(){
  document.querySelector(".header__film_dropdown").getElementsByClassName.display = "none";
}clearCoor()

function myFunction(event){
  var block = document.querySelector(".header__film_dropdown");
  block.getElementsByClassName.display = "block";
}
*/

//var film = document.querySelector("#film");

//function clearCoor() {
//  document.querySelector(".header__film_dropdown").style.display = "none";
//}
//function myFunction(event) {
//  var block = document.querySelector(".header__film_dropdown");
//  block.style.display = "block";
//  document.block.innerHTML = clearCore();
//}

const apiKey = "a923a64ca28f8ca95585d957f0db07ff";
const cardRow = document.querySelector('.popular__row');

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1.org/3/movie/upcoming?api_key=a923a64ca28f8ca95585d957f0db07ff&language=en-US&page=1`)
  .then((res) => res.json())

  .then((movies) => {
    let {results} = movies;

    results.forEach((movie) => {
      let pics = document.querySelector('.card');
      let titles = document.querySelector('.card__title').innerHTML = movie.title;
      let relaseDate = document.querySelector('.card__subtitle').innerHTML = movie.release_date;
      let cardFoto = document.querySelector('.card__foto');
      Movies.getOneMovieImage(movie.backdrop_path);
  
      let cards = `
        <div class="card__img">
          <img src="Photo/Popular/Angel_Mesti.jpg" alt="">
          <a class="card__more" href="#">${cardFoto}
            <img class="card__foto" src="" alt="">
          </a>
        </div>
        <div class="card__footer">
          <div class="card__ring">86</div>
          <div class="card__title">${titles}</div>
          <div class="card__subtitle">${relaseDate}</div>
          <div class="hover"></div>
        </div>
      `
      let cardsRow = cardRow.innerHTML += cards
     
      //console.log(movie, "MMMMMMMMMMm");
    });
  })

  .catch(err=>console.log(err, "ERROR"));


class Movies {
  static getOneMovie(id){
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((movies) => {      
          console.log(movies)
      })
      .catch((err)=>{
        console.log(err, "ERROR");
      });  
  }

  static getOneMovieImage(imageUrl){
    fetch(`https://image.tmdb.org/t/p/w500/${imageUrl}`)
      .then((res) => res.json())
      .then((movies) => {      
          console.log(movies)
      })
      .catch((err)=>{
        console.log(err, "ERROR");
      });  
  }
}
Movies.getOneMovie(726684);

