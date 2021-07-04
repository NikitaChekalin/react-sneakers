import React, { useState } from 'react';
import Card from '../Components/Card/Card';
import AppContext from '../context';
import axios from 'axios';

export default function Orders() {
  const { onAddToCart, onAddToFavorite } = React.useContext(AppContext);
  const [orders, setOrders] = useState([]);

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://60d4633761160900173cb0e9.mockapi.io/orders');
      // console.log(data.map((obj) => obj.items.flat()));
      setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
    })();
  }, []);
  return (
    <div className="content">
      <h1 className="content__header">Мої замовлення</h1>

      <div className="sneakers">
        <div className="sneakers">
          {orders.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
