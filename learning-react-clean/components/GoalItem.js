import React from 'react'
import {Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
    <TouchableOpacity onPress = {props.onDelete}>
      <View style = {styles.listItem}>
          <Text>{props.title}</Text>
      </View>
     </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    listItem:{
      padding: 10,
      borderColor: '#ccc',
      borderColor: 'black',
      borderWidth:1,
      margin: 10,
    },
  });
  
export default GoalItem;