import React from 'react';
import Card from ' ../../../src/Components/Card/Card';

export default function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content">
      <h1 className="content__header">Мои закладки</h1>

      <div className="sneakers">
        <div className="sneakers">
          {items.map((item, index) => (
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
