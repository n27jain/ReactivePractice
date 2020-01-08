

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
  } from 'react-native';
  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
  


export default class Card extends Component {
    
    render() {
        return (
            <View style={currencyStyles.sectionContainer}>
                <Image style={{height:40, width:35, marginRight:40}} source={this.props.imageUri} />
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View >
                        <Text style = {currencyStyles.sectionTitle}>{this.props.name}</Text>
                        <Text>{this.props.label}</Text>
                    </View>
                    
                </View>
                    <Text style = {{fontSize:20}}> {this.props.value} </Text>
                    <Image style={{height:24, width:24}} source={ require('../img/calc.png') } />
            </View>
        );
        }
  }
  
  const currencyStyles = StyleSheet.create({
    sectionContainer: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 32,
      paddingHorizontal: 24,
    },

    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },

    // logo: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     marginTop: 32,
    //     paddingHorizontal: 24,
    //   },

    // calc: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     marginTop: 32,
    //     paddingHorizontal: 24,
    // },

    
  });