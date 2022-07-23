import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet, Text, View, Image} from 'react-native';
import axios from 'axios';
import {useEffect} from 'react';
import {SIZES} from '../general/Constants';
import {ScrollView} from 'react-native';

const Home = () => {
  const [places, setPlaces] = useState([]);
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
              <Text>{item.name}</Text>
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
  },
  image: {
    width: SIZES.wp('90%'),
    height: SIZES.hp('25%'),
    borderRadius: 10,
  },
});
