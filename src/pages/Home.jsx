import React from 'react';
import Card from '../Components/Card/Card';

export default function Home({
  items,
  searchValue,
  setsearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content">
      <div className="search__block">
        <img width={20} alt="Search..." src={'/img/search.png'} className="search__photo" />
        {searchValue && (
          <img
            onClick={() => setsearchValue('')}
            className="cart__remove__btn"
            src={'/img/btn-remove.svg'}
            width={40}
            alt="Clear"
          />
        )}
        <input
          type="text"
          onChange={onChangeSearchInput}
          value={searchValue}
          placeholder="Пошук необхідної пари.."
        />
      </div>
      <h1 className="content__header">
        {searchValue ? `Пошук по запиту "${searchValue}"` : 'Всі кросівки'}
      </h1>

      <div className="sneakers">{renderItems()}</div>
    </div>
  );
}
