import React from 'react'
import sneakers from '../img/sneakers/1.jpg'
import unliked from '../img/unliked.svg'
import plus from '../img/plus.png'


export default function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src={unliked} alt="efee" />
      </div>
      <img width={200} src={sneakers} alt="Sneakers 1" />
      <p>Чоловічі кросівки "middle" Nike Mid Green</p>
      <div className="card__info">
        <div className="card__main">
          <span>Вартість:</span>
          <b>1289 грн.</b>
        </div>
        <button>
          <img width={35} src={plus} alt="" />
        </button>
      </div>
    </div>
  )
}
