import {Image, StyleSheet, Text, TextInput, View, Button} from 'react-native';

import React, {useState} from 'react';
import headerImage1 from '../assets/icon-orange.png';
import instagramIcon from '../assets/icon-instagram.png';
import Footer from '../components/MainFooter';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [credentials, setCredentials] = useState('');

  const LoginFetch = () => {
    if (!userName.trim() || !password.trim()) {
      setUserNameError('fill the fields');
    } else if (userName !== 'Admin' && password !== '8QCpj@@@k3YY') {
      setCredentials('credentials are wrong');
    }

    var myHeaders = new Headers();
    myHeaders.append('client_id', 'orange_test_mobileApp');
    myHeaders.append('client_secret', 'OrangeIT123');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      'Bearer e918bbceba68944de04c0aee6efd853e72d27e16',
    );

    var raw = JSON.stringify({
      username: userName,
      password: password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://asiri123-osondemand.orangehrm.com/symfony/web/api/v1/login',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        navigation.navigate({
          name: 'Home',
          params: {
            name: result.user.employeeName.toString(),
            Id: result.user.employeeId.toString(),
          },
        });
      })

      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainMiddleContent}>
        <Image source={headerImage1} style={styles.mainBackground}></Image>
        <View style={styles.userNameField}>
          <TextInput
            style={styles.inputfield}
            placeholder="User Name"
            onChangeText={text => setUserName(text)}
            value={userName}
          />
          <Text style={{color: 'red'}}>{userNameError}</Text>
        </View>
        <View style={styles.passwordField}>
          <TextInput
            style={styles.inputfield}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <Text style={{color: 'red'}}>{userNameError}</Text>
          <Text style={{color: 'red'}}>{credentials}</Text>
        </View>
        <View style={styles.loginContainer}>
          <Button
            title="Login"
            style={styles.loginBtn}
            onPress={() => LoginFetch()}>
            Login
          </Button>
        </View>
        <View style={styles.instagramContainer}>
          <Image source={instagramIcon} style={styles.instagramImage}></Image>
          <Text>Login with Instagram</Text>
        </View>
      </View>
      <View style={styles.MainFooterContainer}>
        <Footer />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFE5B4',
  },
  loginContainer: {
    paddingTop: 20,
  },
  mainHeaderContent: {
    flex: 2,
    backgroundColor: 'orange',
  },
  mainMiddleContent: {
    paddingTop: 20,
    flex: 8,
    alignItems: 'center',
  },
  MainFooterContainer: {
    flex: 2,
    paddingBottom: 20,
    alignItems: 'center',
  },
  mainBackground: {
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
  instagramContainer: {
    paddingTop: 80,
    alignItems: 'center',
  },
  instagramImage: {
    width: 70,
    height: 70,
  },
});
