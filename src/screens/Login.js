import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import React from 'react';
// import backgroundIMG1 from '../assets/background1.jpeg';
import headerImage1 from '../assets/middle-content-1.jpg';
import instagramIcon from '../assets/instagram-icon.jpg';

const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeaderContent}></View>
      <View style={styles.mainMiddleContent}>
        <Image source={headerImage1} style={styles.mainBackground}></Image>
        <View style={styles.userNameField}>
          <TextInput style={styles.inputfield} placeholder='User Name'></TextInput>
        </View>
        <View style={styles.passwordField}>
          <TextInput style={styles.inputfield} placeholder='Password'></TextInput>
        </View>
        <Button title="Login">Login</Button>

        <View style={styles.instagramContainer}>
          <Image source={instagramIcon} style={styles.instagramImage}></Image>
          <Text>Login with Instagram</Text>
        </View>
      </View>
      <View style={styles.MainFooterContainer}></View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainHeaderContent: {
    flex: 2,
    backgroundColor: 'orange',
  },
  mainMiddleContent: {
    flex: 8,
    //backgroundColor: 'blue',
    alignItems: 'center',
  },
  MainFooterContainer: {
    flex: 2,
    backgroundColor: 'red',
  },
  mainBackground: {
    //flex: 1,
    width: 150,
    height: 150,
    justifyContent: 'center',
  },
  
  inputfield: {
    height: 40,
    width: 280,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
  instagramContainer:{
       paddingTop:30,
       alignItems: 'center'
  },
  instagramImage: {
    width: 100,
    height: 100,
  },
});
