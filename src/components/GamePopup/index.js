import './index.css'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

const GamePopup = () => (
  <div className="button-container">
    <Popup
      modal
      trigger={
        <button className="button" type="button">
          RULES
        </button>
      }
      className="popup-container"
    >
      {close => (
        <div className="modal-container">
          <button
            className="close-button"
            type="button"
            onClick={() => close()}
          >
            .
            <RiCloseLine className="close-icon" />
          </button>

          <div className="content">
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </div>
        </div>
      )}
    </Popup>
  </div>
)

export default GamePopup
