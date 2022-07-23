import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet, Text, View, Image} from 'react-native';
import axios from 'axios';
import {useEffect} from 'react';
import {SIZES} from '../general/Constants';
import {ScrollView} from 'react-native';
import Loading from '../lottie/Loading';

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://traveller.talrop.works/api/v1/places').then(response => {
      let data = response.data.data;
      setPlaces(data);
      console.log(places);
    });
  }, []);
  return (
    <SafeAreaView>
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
                  source={require('../../assets/images/place.png')}
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
  },
  location: {},
  locationimage: {
    width: SIZES.wp('6%'),
    height: SIZES.hp('3%'),
  },
});
