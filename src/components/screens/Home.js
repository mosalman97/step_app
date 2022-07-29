import React, {useState, useEffect, useContext} from 'react';
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
import {Context} from '../context/Store';
import Loader from '../../assets/lottie/Loader';

const Home = ({navigation}) => {
  const [places, setPlaces] = useState([]);
  const {state, dispatch} = useContext(Context);
  const [isLoading, setLoading] = useState(true);
  const addid = id => {
    navigation.navigate('Singlepage', {id});
  };

  useEffect(() => {
    axios
      .get('https://traveller.talrop.works/api/v1/places')
      .then(response => {
        let {data, StatusCode} = response.data;
        if (StatusCode === 6000) {
          setPlaces(data);
          setLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  //logout function
  const logout = () => {
    dispatch({
      type: 'UPDATE_USER_DATA',
      userData: {
        islogged: false,
        access_token: '',
      },
    });
  };
  return isLoading ? (
    <Loader />
  ) : (
    <SafeAreaView>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttontext}>Logout</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {places.map(item => (
            <TouchableOpacity onPress={() => addid(item.id)} key={item.id}>
              <View style={styles.item}>
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
            </TouchableOpacity>
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
    width: SIZES.wp('30%'),
    height: SIZES.hp('6%'),
    backgroundColor: '#0FA76F',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0FA76F',
    borderWidth: 1,
  },
  buttontext: {
    color: 'white',
    fontSize: SIZES.hp('3%'),
  },
});
