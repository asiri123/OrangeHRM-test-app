import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import persona from '../assets/persona-img-1.png';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}></View>
      <View style={styles.imageContainer}>
        <Image source={persona} style={styles.personaField}></Image>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.mainText}>
            Name :
        </Text>
        <Text style={styles.mainText}>
            Email :
        </Text>

      </View>
      <View style={styles.footerContainer}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //alignItems: 'center'
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
    borderRadius:5,
    marginLeft:120,
    backgroundColor:'red'
  },
  detailsContainer: {
    flex: 6,
   paddingTop:20,
    paddingLeft:40,
    backgroundColor:'yellow'
  },
  footerContainer: {
    flex: 2,
  },
  personaField: {
    width: 100,
    height: 100,
  },
  mainText:{
    fontSize:20
  }
});
