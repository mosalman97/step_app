import AsyncStorage from '@react-native-async-storage/async-storage';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'userData':
      const userData = {...state.userData, ...action.userData};
      AsyncStorage.setItem('userData', JSON.stringify(userData));
      return {
        ...state,
        userData: userData,
      };
    case 'userLogout':
      AsyncStorage.clear('');
      return {
        ...state,
        userData: userData,
      };
    default:
      return state;
  }
};

export default Reducer;
