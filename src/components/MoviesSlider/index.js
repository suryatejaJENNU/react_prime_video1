import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem/index'

import './index.css'

const MoviesSlider = props => {
  const {actionMovies} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {actionMovies.map(each => (
          <MovieItem actionMovies1={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
