import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SIZES} from '../general/Constants';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

const Signup = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handlesubmit = () => {
    axios
      .post('https://traveller.talrop.works/api/v1/auth/register/', {
        username,
        email,
        password,
      })
      .then(response => {
        let {StatusCode,data} = response.data
        if (StatusCode === 6000) {
          AsyncStorage.setItem('data', JSON.stringify(data));
          navigation.navigate('Home');
          setEmail(""),
          setPassword(""),
          setUsername("")
          setLoading(false)
        } else {
          alert("Enter Username ,Password ,Email");
        }
      })
      .catch(error => {
        if (error.response.status === 401) {
          setMessage(error.response.data.detail);
        }
      });
       {
         username && password && email ? setLoading(true) : setLoading(false);
       }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Username"
            onChangeText={username => setUsername(username)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            onChangeText={email => setEmail(email)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
            onChangeText={password => setPassword(password)}
            value={password}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handlesubmit}>
          {handlesubmit && isLoading ? (
            <ActivityIndicator size="small" color="#0000" />
          ) : (
            <Text style={styles.signin}>Signin</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  logocontainer: {
    paddingBottom: 15,
  },
  logo: {
    width: SIZES.wp('80%'),
    height: SIZES.hp('10%'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  input: {
    borderColor: '#2BC871',
    width: SIZES.wp('80%'),
    height: SIZES.hp('8%'),
    marginTop: 15,
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
    marginTop: 40,
    width: SIZES.wp('50%'),
    height: SIZES.hp('6%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
