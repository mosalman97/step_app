import React, {createContext, useReducer} from 'react';
import Reducer from './Reducer';

const initialState = {
  user_data: {
    islogged: false,
    access_token: '',
  },
};
console.log(initialState);

const Store = ({childern}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{state, dispatch}}>{childern}</Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;
