import React from 'react'
import logo from '../img/logo.png'
import user from '../img/user.png'
import shopingCard from '../img/shopping-card.png'


export default function Header() {
    return (
        <div>
            <header>
                <div className="header__left">
                    <img width={80} heigth={80} alt="" src={logo} />
                    <div className="header__info">
                        <h3>React Sneakers</h3>
                        <p className="header__info__header">Популярний магазин кросівок</p>
                    </div>
                </div>
                <ul className="header__right">
                    <li>
                        <img alt="" width={50} src={shopingCard} />
                        <span>1105 грн.</span>
                    </li>
                    <li>
                        <img alt="" width={30} src={user} />
                    </li>
                </ul>
            </header>
        </div>
    )
}
