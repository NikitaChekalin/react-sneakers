import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import stylesCard from './Card.module.scss';
import AppContext from '../../context';
export default function Card({
  id,
  imageUrl,
  added = false,
  title,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAddedToCart } = React.useContext(AppContext);
  const [isFavorite, setisFavorite] = useState(favorited);
  const itemObj = { id, parentId: id, title, imageUrl, price };
  const onClickPlus = () => {
    onPlus(itemObj);
  };
  const onClickFavorite = () => {
    onFavorite(itemObj);
    setisFavorite(!isFavorite);
  };
  return (
    <div className={stylesCard.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={205}
          height={265}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="173" rx="10" ry="10" width="150" height="15" />
          <rect x="0" y="196" rx="10" ry="10" width="100" height="15" />
          <rect x="0" y="219" rx="10" ry="10" width="80" height="24" />
          <rect x="118" y="210" rx="10" ry="10" width="32" height="32" />
          <rect x="0" y="9" rx="9" ry="9" width="155" height="155" />
        </ContentLoader>
      ) : (
        <>
          <div className={stylesCard.favorite}>
            {onFavorite && (
              <img
                onClick={onClickFavorite}
                src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
                alt="efee"
              />
            )}
          </div>
          <img width={200} src={imageUrl} alt="Sneakers 1" />
          <p>{title}</p>
          <div className={stylesCard.card__info}>
            <div className={stylesCard.card__main}>
              <span>Вартість:</span>
              <b>{price}</b>
            </div>
            {onPlus && (
              <img
                className={stylesCard.card__plus}
                width={35}
                height={35}
                src={isItemAddedToCart(id) ? '/img/btnChecked.svg' : '/img/plus.png'}
                onClick={onClickPlus}
                alt=""
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

// const MyLoader = (props) => (
//  <ContentLoader
// speed={2}
// width={205}
// height={265}
// viewBox="0 0 155 265"
// backgroundColor="#f3f3f3"
// foregroundColor="#ecebeb">
// <rect x="0" y="173" rx="10" ry="10" width="150" height="15" />
// <rect x="0" y="196" rx="10" ry="10" width="100" height="15" />
// <rect x="0" y="219" rx="10" ry="10" width="80" height="24" />
// <rect x="118" y="210" rx="10" ry="10" width="32" height="32" />
// <rect x="0" y="9" rx="9" ry="9" width="155" height="155" />
// </ContentLoader>
// )

/* <div className={stylesCard.favorite}>
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
      </div> */
