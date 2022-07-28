import React from 'react'

export default function Home() {
  return (
    <div className='dashboard'>
      <div class="message">
      <p>Welcome Nathan!</p>
    </div>

    <div class="featured">
      <div class="title">
        <p>Featured</p>
      </div>
      <div class="featured-songs">
        <div class="song1">
          <div class="image">
            <a href="https://www.qries.com/">
         <img alt={""} src="https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635.jpg"
         width="150" height="150" />
      </a>
          </div>
          <p class="name">Over Now</p>
          <p class="artist">Post Malone</p>
          <i class="fa-solid fa-play"></i>
        </div>
        
         <div class="song2">
           <div class="image">
            <a href="https://www.qries.com/">
         <img alt={""} src="https://i.scdn.co/image/ab67616d0000b273626745b3aa04899001a924ad"
         width="150" height="150" />
      </a>
          </div>
          <p class="name">Low Life</p>
          <p class="artist">The Weekend</p>
           <i class="fa-solid fa-play"></i>
        </div>
        
         <div class="song3">
           <div class="image">
            <a href="https://www.qries.com/">
         <img alt={""} src="https://i.pinimg.com/originals/05/d9/72/05d9729fb2eb1e891b9ee56ed315e298.jpg"
         width="150" height="150" />
      </a>
          </div>
          <p class="name">YAYA</p>
          <p class="artist">6ix9ine</p>
           <i class="fa-solid fa-play"></i>
        </div>
      </div>
    </div>
    
    <div class="featured">
      <div class="title">
        <p>Albums of the summer
</p>
      </div>
      <div class="featured-songs">
        <div class="song1">
          <div class="image">
            <a href="https://www.qries.com/">
         <img alt={""} src="https://wallpapercave.com/wp/wp4685864.jpg"
         width="150" height="150" />
      </a>
          </div>
          <p class="name">Dark Knight Dummo</p>
          <p class="artist">Trippi Redd</p>
          <i class="fa-solid fa-play"></i>
        </div>
        
         <div class="song2">
           <div class="image">
            <a href="https://www.qries.com/">
         <img alt={""} src="https://external-preview.redd.it/B3CA06azeiKnZ2UlDYQmNjEIjeK9EkvX1U-plGW4WrM.jpg?auto=webp&s=fc62536311988c7800558274a220a3a177842fc4"
         width="150" height="150" />
      </a>
          </div>
          <p class="name">All Time Low</p>
          <p class="artist">Jon Bellion</p>
           <i class="fa-solid fa-play"></i>
        </div>
        
         <div class="song3">
           <div class="image">
            <a href="https://www.qries.com/">
         <img alt={""} src="https://i.scdn.co/image/ab67616d0000b273ce159a3ba2096e13fa9d4b4c"
         width="150" height="150" />
      </a>
          </div>
          <p class="name">Never Recover</p>
          <p class="artist">Lil Baby, Drake, Gunna</p>
           <i class="fa-solid fa-play"></i>
        </div>
      </div>
    </div>
    </div>
  )
}