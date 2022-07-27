import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {SIZES} from '../general/Constants';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';

const SinglePage = ({navigation}) => {
  const [detail, setDetail] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [ids, setId] = useState(0);
  const route = useRoute();
  useEffect(() => {
    setId(route.params.id);
    axios
      .get(`https://traveller.talrop.works/api/v1/places/view/${ids}`)
      .then(response => {
        let {data, StatusCode} = response.data;
        if (StatusCode === 6000) {
          setDetail(data);
          setGallery(data.gallery);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [ids]);
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
              <ScrollView horizontal={true}>
                {gallery.map(item => (
                  <View key={item.id}>
                    <Image
                      style={styles.listimage}
                      source={{uri: `${item.image}`}}></Image>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View style={styles.bottom}>
              <Text style={styles.placehead}>Place Detail</Text>
              <Text style={styles.para}>{detail.description}</Text>
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
    borderWidth: 2,
    borderColor: 'lightgray',
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
  listimage: {
    width: SIZES.wp('90%'),
    height: SIZES.hp('25%'),
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  placehead: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 5,
  },
  para: {
    fontSize:13,
  },
});
