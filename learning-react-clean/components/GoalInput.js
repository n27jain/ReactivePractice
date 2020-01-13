import { default as React, default as React, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = props => {

    const [ enteredGoal, setGoal] = useState('');
   

    const goalInputHandler =  (enteredText) => {
        setGoal(enteredText);
    };
   


    return (
        <View style={styles.inputContainer}>

        <TextInput placeholder = "Course Goal" style = {styles.input}
          onChangeText = {goalInputHandler}
          value = {enteredGoal}
        />
        <Button style={styles.buttonFormat} title= "ADD"
          onPress = {
              props.onAddGoal.bind(this, enteredGoal)}
         />
        {/* <Button style={styles.buttonFormat} title= "CLEAR"
          onPress = {props.clearGoalHandler}
        /> */}
      </View>
   
    );
};


const styles = StyleSheet.create({
    
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
    },
    
    input:{
      width: '50%',
      borderWidth: 1,
      padding: 8,
      
    },
    buttonFormat:{
      flex: 1,
    },
   
  });
  
export default GoalInput;