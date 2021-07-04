import React from 'react';
import Card from ' ../../../src/Components/Card/Card';
import AppContext from '../context';

export default function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content">
      <h1 className="content__header">Мои закладки</h1>

      <div className="sneakers">
        <div className="sneakers">
          {favorites.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
