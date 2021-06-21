import React from 'react'
import btnRemove from '../img/btn-remove.svg'
import btnArrow from '../img/arrow.svg'
import sneakers from '../img/sneakers/1.jpg'


export default function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2>Корзина
                    <img className="cart__remove__btn" src={btnRemove}
                        width={30} alt="" />
                </h2>
                <div className="cart__items">
                    <div className="cart__item">
                        <img className="cart-img" src={sneakers} width={120}
                            alt="" />
                        <div className="cart__info">
                            <p>Чоловічі кросівки "middle" Nike Mid Green</p>
                            <b>1259 грн.</b>
                        </div>
                        <img className="cart__remove__btn" src={btnRemove}
                            width={70} alt="" />
                    </div>
                </div>
                <ul className="cart__footer">
                    <li className="cart__footer__item">
                        <span>Разом</span>
                        <div></div>
                        <b>13355 грн.</b>
                    </li>
                    <li className="cart__footer__item" >
                        <span>Податок 5%:</span>
                        <div></div>
                        <b>501грн.</b>
                    </li>
                </ul>
                <button className="btn__cart__confirm">Оформити замовлення
                    <img className="cart__footer__arrow" src={btnArrow} alt="Arrow Svg" />
                </button>
            </div>
        </div>
    )
}
