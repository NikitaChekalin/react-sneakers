import React from 'react';
import axios from 'axios';

import Info from '../Info/Info';
import AppContext from '../../context';

import stylesDrawer from './Drawer.module.scss';
export default function Drawer({ onClose, items = [], onRemove }) {
  const API_ORDERS = 'https://60d4633761160900173cb0e9.mockapi.io/orders';
  const API_CART = 'https://60d4633761160900173cb0e9.mockapi.io/cart/';
  const { setCartItems, cartItems } = React.useContext(AppContext);
  const [isOrderCompleted, setisOrderCompleted] = React.useState(false);
  const [orderID, setOrderID] = React.useState(null);
  const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0);
  const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
  const onClickOrder = async () => {
    try {
      const { data } = await axios.post(API_ORDERS, {
        items: cartItems,
      });
      setOrderID(data.id);
      setisOrderCompleted(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(API_CART + item.id, []);
        await delay();
      }
    } catch (error) {
      alert('НЕ вдалось оформити замовлення :(');
    }
  };

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
                <b>{`${totalPrice} грн.`}</b>
              </li>
              <li className={stylesDrawer.cart__footer__item}>
                <span>Податок 5%:</span>
                <div></div>
                <b>{`${(totalPrice * 100) / 5} грн.`}</b>
              </li>
            </ul>
            <button onClick={onClickOrder} className={stylesDrawer.btn__cart__confirm}>
              Оформити замовлення
              <img
                className={stylesDrawer.cart__footer__arrow}
                src={'/img/arrow.svg'}
                alt="Arrow Svg"
              />
            </button>
          </div>
        ) : (
          <Info
            title={isOrderCompleted ? 'Заказ Оформлений ' : 'Корзина Пуста '}
            description={
              isOrderCompleted
                ? `Ваше замовлення #${orderID} буде передано курєрскій службі `
                : 'Додайте щось , щоб зробити замовлення'
            }
            image={isOrderCompleted ? '/img/order.png' : '/img/cartEmpty.png '}
          />
        )}
      </div>
    </div>
  );
}
