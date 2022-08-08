import React from 'react'
import { UseDataLayerValue } from '../../DataLayer'
import Release from './Release';

export default function Dashboard() {
  const [{ user, releases }, dispatch] = UseDataLayerValue();

  return (
    
    <div className='dashboard'>
      <div className="message">
        <p>Welcome {user?.display_name}</p>
      </div>

      <div className="featured">
        <div className="title">
          <p>Featured</p>
        </div>
        <div className="featured-songs">
          <div className="song1">
            <div className="image">
                <img alt={""} src="https://static.spin.com/files/2018/05/beerbongs-bentleys-cover-1525284635.jpg"
                  width="150" height="150" />
            </div>
            <p className="name">Over Now</p>
            <p className="artist">Post Malone</p>
            <i className="fa-solid fa-play"></i>
          </div>

          <div className="song2">
            <div className="image">
                <img alt={""} src="https://i.scdn.co/image/ab67616d0000b273626745b3aa04899001a924ad"
                  width="150" height="150" />
            </div>
            <p className="name">Low Life</p>
            <p className="artist">The Weekend</p>
            <i className="fa-solid fa-play"></i>
          </div>

          <div className="song3">
            <div className="image">
                <img alt={""} src="https://i.pinimg.com/originals/05/d9/72/05d9729fb2eb1e891b9ee56ed315e298.jpg"
                  width="150" height="150" />
            </div>
            <p className="name">YAYA</p>
            <p className="artist">6ix9ine</p>
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      </div>

      <div className="featured">
        <div className="title">
          <p>Albums of the summer
          </p>
        </div>
        <div className="featured-songs">
          <div className="song1">
            <div className="image">
                <img alt={""} src="https://wallpapercave.com/wp/wp4685864.jpg"
                  width="150" height="150" />
            </div>
            <p className="name">Dark Knight Dummo</p>
            <p className="artist">Trippi Redd</p>
            <i className="fa-solid fa-play"></i>
          </div>

          <div className="song2">
            <div className="image">
                <img alt={""} src="https://external-preview.redd.it/B3CA06azeiKnZ2UlDYQmNjEIjeK9EkvX1U-plGW4WrM.jpg?auto=webp&s=fc62536311988c7800558274a220a3a177842fc4"
                  width="150" height="150" />
            </div>
            <p className="name">All Time Low</p>
            <p className="artist">Jon Bellion</p>
            <i className="fa-solid fa-play"></i>
          </div>

          <div className="song3">
            <div className="image">
                <img alt={""} src="https://i.scdn.co/image/ab67616d0000b273ce159a3ba2096e13fa9d4b4c"
                  width="150" height="150" />
            </div>
            <p className="name">Never Recover</p>
            <p className="artist">Lil Baby, Drake, Gunna</p>
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
    </div>
  )
}