import React from 'react';
import AppContext from '../../context';
import stylesInfo from './Info.module.scss';

const Info = ({ title, description, image }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className={stylesInfo.cart__empty}>
      <img className={stylesInfo.cart__empty__img} src={image} alt="CartEmpty" />
      <h2>{title}</h2>
      <p className={stylesInfo.cart__empty__info}>{description}</p>
      <button onClick={() => setCartOpened(false)} className={stylesInfo.btn__cart__confirm}>
        Повернутись назад
        <img className={stylesInfo.cart__empty__img} src={'/img/arrow.svg'} alt="Arorow" />
      </button>
    </div>
  );
};

export default Info;
