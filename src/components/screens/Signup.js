import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {SIZES} from '../general/Constants';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.continer}>
      <View>
        {/* <Image */}

      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          onChangeText={username => setUsername(username)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={password => setPassword(password)}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: 'lightblue',
    width: SIZES.wp('80%'),
    height: SIZES.hp('8%'),
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
    alignSelf: 'center',
  },
});
