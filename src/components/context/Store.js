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

  const checkRole = role => {
    return state.roles.includes(role);
  };

  return (
    <Context.Provider value={{state, dispatch, checkRole}}>
      {childern}
    </Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;
