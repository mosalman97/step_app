import AsyncStorage from '@react-native-async-storage/async-storage';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'user_loged':
      const user_data = {...state.user_data, ...action.user_data};
      AsyncStorage.setItem('user_data', JSON.stringify(user_data));
      return {
        ...state,
        user_data: user_data
      };
      default:
        return state
  }
};
