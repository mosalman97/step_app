import React, {isValidElement, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {SIZES} from '../general/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Signin = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const login = () => {
    axios
      .post('https://traveller.talrop.works/api/v1/auth/token/', {
        username,
        password,
      })
      .then(response => {
        let {StatusCode, data} = response.data;
        let Statuscode = StatusCode;
        AsyncStorage.setItem('data', JSON.stringify(data));
        navigation.navigate('Home');
        setLoading(false);
        setUsername(''), setPassword('');
      })
      .catch(error => {
        console.log(error.response.data);
        alert('Enter Username and Password');
        if (error.response.status === 401) {
          setLoading(false);
        }
      });
    {
      username && password ? setLoading(true) : setLoading(false);
    }
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
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              onChangeText={password => setPassword(password)}
              value={password}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={login}>
            {login && isLoading ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              <Text style={styles.signin}>Signin</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createaccount}
            onPress={() => navigation.navigate('Signin')}>
            <Text>
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
    alignSelf: 'center',
  },
  signin: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: SIZES.hp('3%'),
  },
  button: {
    backgroundColor: '#0FA76F',
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
