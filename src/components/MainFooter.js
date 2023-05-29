import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import facebookIcon from '../assets/icon-facebook.png';
import GoogleIcon from '../assets/icon-google.png';
import AppleIcon from '../assets/icon-apple.png';

const MainFooter = () => {
  return (
    <View style={Styles.login_social}>
      <View style={Styles.login_social_separator}>
        <View style={Styles.login_social_separator_line} />
        <Text style={Styles.login_social_separator_text}>{'Finding us on'}</Text>
        <View style={Styles.login_social_separator_line} />
      </View>
      <View style={Styles.login_social_buttons}>
        <TouchableOpacity>
          <View
            style={[Styles.login_social_button, Styles.login_social_facebook]}>
            <Image style={Styles.login_social_icon} source={facebookIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.login_social_button}>
            <Image style={Styles.login_social_icon} source={GoogleIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.login_social_button}>
            <Image
              style={Styles.login_social_icon}
              source={AppleIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainFooter;

const Styles = StyleSheet.create({
  login_social: {
    width: '100%',
    maxWidth: 280,
    marginTop: 20,
  },
  login_social_separator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  login_social_separator_line: {
    flex: 1,
    width: '100%',
    height: 5,
    backgroundColor: '#E0E0E0',
  },
  login_social_separator_text: {
    marginHorizontal: 10,
    color: '#808080',
    fontSize: 16,
  },
  login_social_separator_line: {
    flex: 1,
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  login_social_buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  login_social_button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 60,
  },
  login_social_facebook: {
    backgroundColor: '#4267B2',
    borderColor: '#4267B2',
  },
  login_social_icon: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
});
