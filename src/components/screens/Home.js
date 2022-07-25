import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {SIZES} from '../general/Constants';
import Loading from '../lottie/Loading';

const Home = ({navigation}) => {
  const [places, setPlaces] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    axios.get('https://traveller.talrop.works/api/v1/places').then(response => {
      let {data, StatusCode} = response.data;
      if (StatusCode === 6000) {
        setPlaces(data);
        // setLoading(false);
      }
    });
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttontext}>Logout</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttontext}
            onPress={() => navigation.navigate('Signin')}>
            SignUp
          </Text>
        </TouchableOpacity> */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {places.map(item => (
            <View key={item.id} style={styles.item}>
              <View>
                <Image source={{uri: `${item.image}`}} style={styles.image} />
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.location}>
                <Image
                  style={styles.locationimage}
                  source={require('../../assets/images/location.png')}
                />
                <Text style={styles.locationname}>{item.location}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  item: {
    alignSelf: 'center',
    marginTop: 20,
  },
  image: {
    width: SIZES.wp('90%'),
    height: SIZES.hp('25%'),
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 4,
  },
  location: {
    flexDirection: 'row',
  },
  locationimage: {
    width: SIZES.wp('6%'),
    height: SIZES.hp('3%'),
    marginRight: 8,
  },
  locationname: {
    fontSize: 15,
    fontWeight: '400',
  },
  buttoncontainer: {
    alignSelf: 'center',
  },
  button: {
    width: SIZES.wp('25%'),
    height: SIZES.hp('5%'),
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
  },
  buttontext: {
    color: 'white',
    fontSize: SIZES.hp('3%'),
  },
});
