import React from 'react';
import stylesHeader from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <Link to="/">
        <div className={stylesHeader.header__left}>
          <img width={80} heigth={80} alt="" src={'/img/logo.png'} />
          <div className={stylesHeader.header__info}>
            <h3>React Sneakers</h3>
            <p className={stylesHeader.header__info__header}>Популярний магазин кросівок</p>
          </div>
        </div>
      </Link>
      <ul className={stylesHeader.header__right}>
        <li className={stylesHeader.cart} onClick={props.onClickCart}>
          <img alt="" width={50} src={'/img/shopping-card.png'} />
          <span>1235грн.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img alt="" width={30} src={'/img/unliked.svg'} />
          </Link>
        </li>
        <li>
          <img alt="" width={30} src={'/img/user.png'} />
        </li>
      </ul>
    </header>
  );
}
