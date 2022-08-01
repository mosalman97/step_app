import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Platform,
  addons,
} from 'react-native';
import {SIZES} from '../general/Constants';
import {Context} from '../context/Store';
import axios from 'axios';

const Signin = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const {state, dispatch} = useContext(Context);

  const signIn = () => {
    setLoading(true);
    axios
      .post('https://traveller.talrop.works/api/v1/auth/token/', {
        username,
        password,
      })
      .then(response => {
        let data = response.data;
        setLoading(false);
        setUsername(''), setPassword('');
        dispatch({
          type: 'UPDATE_USER_DATA',
          userData: {
            islogged: true,
            access_token: data.access,
          },
        });
      })
      .catch(error => {
        console.log(error.response.data);
        alert('Enter Username and Password');
        if (error.response.status === 401) {
          setLoading(false);
        }
      });
  };

  return (
    <SafeAreaView>
      <View>
        <View style={StyleSheet.container}>
          <View style={styles.inputcontainer}>
            <Text style={styles.heading}>Log In</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              onChangeText={username => setUsername(username)}
              value={username}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              onChangeText={password => setPassword(password)}
              value={password}
              placeholderTextColor="black"
            />
          </View>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: `${username && password ? '#0FA76F' : 'gray'}`,
            }}
            onPress={signIn}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              <Text style={styles.signin}>Signin</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createaccount}
            onPress={() => navigation.navigate('Signin')}>
            <Text style={{color: 'black'}}>
              Create New Account ? <Text style={styles.login}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: SIZES.hp('5%'),
    color: 'black',
    textAlign: 'center',
  },
  inputcontainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 100,
  },
  input: {
    borderColor: '#2BC871',
    width: SIZES.wp('80%'),
    height: SIZES.hp('8%'),
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 50,
    paddingLeft: 20,
    color: 'black',
    alignSelf: 'center',
  },
  signin: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: SIZES.hp('3%'),
  },
  button: {
    // ...Platform.select({
    //   ios: {
    //     backgroundColor: 'red',
    //   },
    //   android: {
    //     backgroundColor: '#0FA76F',
    //   },
    // }),
    borderColor: '#0FA76F',
    borderWidth: 1,
    marginTop: 30,
    width: SIZES.wp('50%'),
    height: SIZES.hp('6%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  createaccount: {
    alignItems: 'center',
    marginTop: 20,
  },
  login: {
    color: '#0FA76F',
    fontWeight: '600',
  },
});
