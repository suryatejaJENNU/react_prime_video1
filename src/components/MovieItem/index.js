import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {actionMovies1} = props
  const {thumbnailUrl, id, videoUrl, categoryId} = actionMovies1
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumnail" />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div className="responsive-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
