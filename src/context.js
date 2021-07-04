import React from 'react';

const AppContext = React.createContext({}); //если обьект изменится то реакт оповестит другие компоненты , которые зависят от этого обькта(Корзина  , Фавориты)
export default AppContext;
