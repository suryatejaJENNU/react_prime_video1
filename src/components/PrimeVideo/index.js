import {Component} from 'react'

import MoviesSlider from '../MoviesSlider/index'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
    const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

    console.log(actionMovies)
    console.log(comedyMovies)
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-image"
        />
        <h1 className="main-heading">Action Movies</h1>
        <MoviesSlider actionMovies={actionMovies} />
        <h1 className="main-heading">Comedy Movies</h1>
        <MoviesSlider actionMovies={comedyMovies} />
      </div>
    )
  }
}

export default PrimeVideo
