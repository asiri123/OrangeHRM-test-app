import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import persona from '../assets/persona-img-1.png';
import {useRoute} from '@react-navigation/native';
import Footer from '../components/MainFooter'
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const logoutFunc = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}></View>
      <View style={styles.imageContainer}>
        <Image source={persona} style={styles.personaField}></Image>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.mainText}>Name :</Text>
        <Text style={styles.mainText}>Email :</Text>
        <View style={styles.logoutBtnContainer}>
          <Button title="Logout" onPress={logoutFunc}></Button>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Footer/>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFE5B4',
  },
  headerContainer: {
    flex: 2,
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 120,
    backgroundColor: 'red',
  },
  detailsContainer: {
    flex: 6,
    paddingTop: 20,

    paddingHorizontal: 40,
  },
  footerContainer: {
    flex: 2,
    alignItems:'center',
    paddingBottom:20
  },
  personaField: {
    width: 100,
    height: 100,
  },
  mainText: {
    fontSize: 20,
  },
  logoutBtnContainer: {
    justifyContent: 'center',
    paddingTop:250
  },
});
