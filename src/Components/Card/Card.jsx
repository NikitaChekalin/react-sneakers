import React, { useState } from 'react';

import stylesCard from './Card.module.scss';

export default function Card({
  id,
  imageUrl,
  title,
  price,
  onFavorite,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setisFavorite] = useState(favorited);
  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setisFavorite(!isFavorite);
  };
  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.favorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
          alt="efee"
        />
      </div>
      <img width={200} src={imageUrl} alt="Sneakers 1" />
      <p>{title}</p>
      <div className={stylesCard.card__info}>
        <div className={stylesCard.card__main}>
          <span>Вартість:</span>
          <b>{price}</b>
        </div>
        <img
          className={stylesCard.card__plus}
          width={35}
          height={35}
          src={isAdded ? '/img/btnChecked.svg' : '/img/plus.png'}
          onClick={onClickPlus}
          alt=""
        />
      </div>
    </div>
  );
}
