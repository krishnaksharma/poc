'use strict';

import React,{
  Component,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

class SplashView extends Component {

  componentWillMount() {
    setTimeout(() => {
      Actions.showLoginView();
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <View style={styles.logoImageContainer}>
            <Image style={styles.logoImage} source={require('image!logo_new')}/>
          </View>
          <View style={styles.textLabelContainer}>
            <Text style={{color: 'green',fontStyle: "italic",}}>
              We care for you.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E9F1F9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewContainer: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  logoImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  logoImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -10,
  },
});
module.exports = SplashView;
