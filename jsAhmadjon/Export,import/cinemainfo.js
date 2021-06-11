const apiKey = "a923a64ca28f8ca95585d957f0db07ff";

class Popular{
  
  static getDetails(){
      fetch(`https://api.themoviedb.org/3/movie/337404?api_key=${apiKey}&language=en-US`)
      
      .then((result) => result.json())
      .then((movies) => {     
        console.log(movies);
        
        let {original_title} = movies;
        const cinemaRow = document.querySelector('.cinema__row');
        console.log(cinemaRow, "rrrooowww");

        //results.forEach((movie)=>{
        //console.log(movie);
    
        //let cinTitle = document.querySelector(".cinema__tit").innerHTML = movies.original_title;
        let card = `
          <div id="imgBact" class="column column__left">
           
            <div>Seychas transliruyetsya</div>
          </div>

          <div class="column column__right">
          <div class="cinema__info">
            <div class="cinema__name">
           <h3 class="cinema__tit">${original_title}</h3>
              <div class="cinema__subtit"><span>18+</span><a href="#"> drama </a> 43m</div>
            </div>
            <div class="cinema__icons">
              <div class="cinema__ring">
                <div class="cinema__rin">86
                  <div class="cinema__border"></div>
                </div>
                
                <span>Пользовательский
                  счёт</span>
              </div>
              <div class="cinema__sign">
                <div class="cinema__list" title="Войти для создания и правки своих списков">
                  <img src="./Photo/Icons/thumbnails.svg" alt="#">

                </div>
                <div class="cinema__list cinema__like">
                  <img src="./Photo/Icons/heart.svg" alt="#">
                </div>
                <div class="cinema__list cinema__add">
                  <img src="./Photo/Icons/bookmark.svg" alt="#">
                </div>
                <div class="cinema__list cinema__rate">
                  <img src="./Photo/Icons/star.svg" alt="#">
                </div>
              </div>
              <div class="cinema__play">
                <i class="fas fa-caret-right"></i>
                Воспроизвести трейлер
              </div>
            </div>
            <div class="cinema__text">
              <p><em>His mind is a mystery, his methods are a miracle.</em></p>
              <p class="title">Обзор</p>
              <p class="cinema__texts">История молодого талантливого врача с синдромом саванта, обладающего уникальными способностями — невероятной памятью и фантастической чувствительностью к проблемам, вспыхивающим внутри человеческого организма. Герой становится блестящим хирургом, несмотря на то, в личностном плане его развитие соответствует развитию десятилетнего ребёнка…</p>
              <a class="cinema__author" href="#">David Shore</a>
              <p class="cinema__create">Создатель</p>
            </div>
          </div>
        </div>

        `
        //console.log(card);
        //console.log(cinemaRow, "rrrrooooooooooooowwwwwwwwwww");
        let cinemaRend = cinemaRow.innerHTML = card

        console.log(cinemaRend, "renddddddd");
   
      })
    //})
      .catch((err) => {
        console.log(err, "ERROR POPULAR");
      });
  }
}

Popular.getDetails()