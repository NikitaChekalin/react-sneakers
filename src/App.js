import './App.scss';
import React, { useState } from 'react';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import Header from './Components/Header/Header';
import Drawer from './Components/Drawer/Drawer';
import { Route } from 'react-router-dom';

import axios from 'axios';
const App = () => {
  const API_ITEMS = 'https://60d4633761160900173cb0e9.mockapi.io/items';
  const API_CART = 'https://60d4633761160900173cb0e9.mockapi.io/cart';
  const API_FAVORITE = 'https://60d4633761160900173cb0e9.mockapi.io/favorite';
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setsearchValue] = useState('');
  const [items, setItems] = useState([]);

  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  React.useEffect(() => {
    axios.get(API_ITEMS).then((res) => {
      setItems(res.data);
    });
    axios.get(API_CART).then((res) => {
      setCartItems(res.data);
    });
    axios.get(API_FAVORITE).then((res) => {
      setFavorites(res.data);
    });
  }, []);
  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setsearchValue(event.target.value);
  };
  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        axios.delete(`${API_CART}/${obj.id}`);
      } else {
        axios.post(API_CART, obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {}
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`${API_CART}/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`${API_FAVORITE}/${obj.id}`);
    } else {
      axios.post(API_FAVORITE, obj);
      setFavorites((prev) => [...prev, obj]);
    }
  };
  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer onRemove={onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setsearchValue={setsearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
};
export default App;
