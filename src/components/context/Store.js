import react, {createContext, Reducer, useReducer} from 'react';
import Reducer from "../context/Reducer"

const initialState = {
  user_data: {
    islogged: false,
    access_token: '',
  },
};

const Store = ({childern}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={{state,dispatch}}>{childern}</Context.Provider>;
};

export const Context = createContext(initialState);

export default Store;
