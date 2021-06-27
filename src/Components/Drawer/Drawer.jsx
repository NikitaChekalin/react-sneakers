import React from 'react';
import stylesDrawer from './Drawer.module.scss';

export default function Drawer({ onClose, items = [], onRemove }) {
  return (
    <div className={stylesDrawer.overlay}>
      <div className={stylesDrawer.drawer}>
        <h2>
          Корзина
          <img
            onClick={onClose}
            className={stylesDrawer.cart__remove__btn}
            src={'/img/btn-remove.svg'}
            width={30}
            alt=""
          />
        </h2>
        {items.length > 0 ? (
          <div className={stylesDrawer.cart__items}>
            {items.map((obj) => (
              <div key={obj.id} className={stylesDrawer.cart__item}>
                <img className={stylesDrawer.cartImg} width={110} src={obj.imageUrl} alt="" />
                <div className={stylesDrawer.cart__info}>
                  <p>{obj.title}</p>
                  <b>Вартість:{obj.price}</b>
                </div>
                <img
                  className={stylesDrawer.cart__remove__btn}
                  src={'/img/btn-remove.svg'}
                  width={40}
                  onClick={() => onRemove(obj.id)}
                  alt=""
                />
              </div>
            ))}
            <ul className={stylesDrawer.cart__footer}>
              <li className={stylesDrawer.cart__footer__item}>
                <span>Разом</span>
                <div></div>
                <b>13355 грн.</b>
              </li>
              <li className={stylesDrawer.cart__footer__item}>
                <span>Податок 5%:</span>
                <div></div>
                <b>501грн.</b>
              </li>
            </ul>
            <button className={stylesDrawer.btn__cart__confirm}>
              Оформити замовлення
              <img
                className={stylesDrawer.cart__footer__arrow}
                src={'/img/arrow.svg'}
                alt="Arrow Svg"
              />
            </button>
          </div>
        ) : (
          <div className={stylesDrawer.cart__empty}>
            <img
              className={stylesDrawer.cart__empty__img}
              src={'/img/cartEmpty.png'}
              alt="CartEmpty"
            />
            <h2>Корзина пуста</h2>
            <p className={stylesDrawer.cart__empty__info}>Додайте щось , щоб зробити замовлення</p>
            <button onClick={onClose} className={stylesDrawer.btn__cart__confirm}>
              Повернутись назад
              <img className={stylesDrawer.cart__empty__img} src={'/img/arrow.svg'} alt="Arorow" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
