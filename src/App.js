import './App.scss';
import React, { useState } from 'react';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import Orders from './pages/Orders.jsx';
import Header from './Components/Header/Header';
import Drawer from './Components/Drawer/Drawer';
import { Route } from 'react-router-dom';
import axios from 'axios';

import AppContext from './context';

const App = () => {
  const API_ITEMS = 'https://60d4633761160900173cb0e9.mockapi.io/items';
  const API_CART = 'https://60d4633761160900173cb0e9.mockapi.io/cart';
  const API_FAVORITE = 'https://60d4633761160900173cb0e9.mockapi.io/favorite';

  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setsearchValue] = useState('');
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    async function FetchData() {
      const favoriteResponse = await axios.get(API_FAVORITE);
      const cartResponse = await axios.get(API_CART);
      const itemsResponse = await axios.get(API_ITEMS);

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoriteResponse.data);
      setItems(itemsResponse.data);
    }
    FetchData();
  }, []);
  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setsearchValue(event.target.value);
  };
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`${API_CART}/${findItem.id}`);
      } else {
        const { data } = await axios.post(API_CART, obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log('оШибка');
    }
  };
  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`${API_CART}/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`${API_FAVORITE}/${obj.id}`);
      } else {
        axios.post(API_FAVORITE, obj); // for getting only data . without settings axios
        setFavorites((prev) => [...prev, obj]);
      }
    } catch (error) {
      console.log('Не вдалось додати до улюблених');
    }
  };
  const isItemAddedToCart = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        onAddToCart,
        items,
        cartItems,
        favorites,
        isItemAddedToCart,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper">
        {cartOpened && (
          <Drawer onRemove={onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)} />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        <Route path="/" exact>
          <Home
            isLoading={isLoading}
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setsearchValue={setsearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
          />
        </Route>
        <Route path="/favorites" exact>
          <Favorites items={favorites} />
        </Route>
        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
};
export default App;
