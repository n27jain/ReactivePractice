import Card from './src/components/Card.js'
import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
} from 'react-native/Libraries/NewAppScreen';


export default class App extends Component {
  render() {
    return (
          <>
            <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                {/* <Header /> */}
                {global.HermesInternal == null ? null : (
                  <View style={styles.engine}>
                    <Text style={styles.footer}>Engine: Hermes</Text>
                  </View>
                )}
                <View style={styles.body}>
                  {/* <Currency url= {require('./uk-flag.png')} title='GBP' name='British Pound'/> */}
                  {/* <Card title='GBP' name='British Pound'/> */}
                  <Card name = 'CAN' 
                  label = 'Canadian Dollar' 
                  imageUri = {require('./src/img/canada-flag.png')}
                  value = '$1.30'
                  
                  />
                  <Card name = 'GBP' 
                  label = 'British Pound' 
                  imageUri = {require('./src/img/uk-flag.png')}
                  value = '£0.76'
                  
                  />
                  <Card name = 'EUR' 
                  label = 'Euro' 
                  imageUri = {require('./src/img/eruo-flag.png')}
                  value = '€0.90'
                  
                  />
                  <Card name = 'USD' 
                  label = 'US Dollar' 
                  imageUri = {require('./src/img/us-flag.png')}
                  value = '$1.00'
                  
                  />
                </View>
              </ScrollView>
            </SafeAreaView>
          </>
        );
  }
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });