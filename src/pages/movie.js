// import functions from another file
import movie from "../db/data.js"
window.addEventListener('DOMContentLoaded', () => {
  console.log("everything is starting from here: currently on movie page")

})

// function generateMovie(){



const movieWrapper = document.querySelector('.movies-wrapper')
movieWrapper.innerHTML=""

for (let i = 0; i < movie.length; i++){
  let movieCard = movie[i]

  movieWrapper.innerHTML+=`
      <div class="movie">
        <div class="movie-thumbnail">
          <img src="${movieCard.cover}" alt="">
        </div>
        <div class="movie-detail">
          <h4>${movieCard.title}</h4>
          <div class="movie-info">
            <p>
              <ion-icon name="calendar-number"></ion-icon>
              ${movieCard.releasedDate}
            </p>
            <p>
              <ion-icon name="alarm"></ion-icon>
              ${movieCard.duration}
            </p>
            <p>
              <ion-icon name="pricetag"></ion-icon>
              ${movieCard.category}
            </p>
          </div>
  
          <div class="btn-group">
            <button class="btn btn-main" id="showDetailBtn" data-movie="....">SHOW DETAIL</button>
          </div>
  
        </div>
      </div>`


}


let counter = movie.length

const totalMovies = document.querySelector('#totalMovies')

totalMovies.textContent = counter


