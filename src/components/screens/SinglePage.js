import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {SIZES} from '../general/Constants';
import axios from 'axios';
const SinglePage = ({navigation}) => {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios
      .get('https://traveller.talrop.works/api/v1/places/view/27')
      .then(response => {
        let {data, StatusCode} = response.data;
        if (StatusCode === 6000) {
          setDetail(data);
          console.log(detail);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.contaniner}>
        <View style={styles.head}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttontext}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.heading}>
            <Text style={styles.title}>{detail.name}</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryname}>{detail.category_name}</Text>
            <View style={styles.locationcontainer}>
              <Image
                style={styles.locationimage}
                source={require('../../assets/images/location.png')}
              />
              <Text style={styles.locationname}>{detail.location}</Text>
            </View>
          </View>
          <View style={styles.gallery}>
            <Image
              style={styles.coverimage}
              source={{uri: `${detail.image}`}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SinglePage;

const styles = StyleSheet.create({
  contaniner: {
    width: SIZES.wp('90%'),
    alignSelf: 'center',
  },
  logo: {
    width: SIZES.wp('30%'),
    height: SIZES.hp('10%'),
    resizeMode: 'contain',
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
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  categoryname: {
    marginRight: SIZES.wp('8%'),
    fontSize: SIZES.wp('4%'),
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 6,
  },
  locationcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationimage: {
    width: SIZES.wp('5%'),
    height: SIZES.hp('3%'),
    marginRight: 8,
  },
  locationname: {
    fontSize: 15,
    fontWeight: '600',
  },
  coverimage: {
    width: SIZES.wp('90%'),
    height: SIZES.hp('25%'),
    borderRadius: 10,
  },
});
