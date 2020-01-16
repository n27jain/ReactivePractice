import { default as React, useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

const GoalInput = props => {

    const [ enteredGoal, setGoal] = useState('');
   

    const goalInputHandler =  (enteredText) => {
        setGoal(enteredText);
    };
   
    return (
        <Modal visible = {props.visible} animationType = 'fade'>

            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder = "Course Goal" 
                    style = {styles.input}
                    onChangeText = {goalInputHandler}
                    value = {enteredGoal}
                />
                <View style = {styles.buttonContainer}>
                    <View style = {styles.button}>
                        <Button  title= "ADD"
                            onPress = {
                                () => props.onAddGoalHandler(enteredGoal)
                                //or Bind functionality
                                //props.onAddGoalHandler.bind(enteredGoal)
                                }
                        />
                    </View>
                    <View style = {styles.button}>
                        <Button title= "CLEAR" color="red" 
                            onPress = {
                            props.onExitScreen
                            }
                        />
                    </View>
                </View>
            </View>

            

        </Modal>
    );
};


const styles = StyleSheet.create({
    // modalStyle:{
    //     flexDirection:'column',
    //     alignContent: 'center',
    //     flex: 1,
    // },

    inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },

    input:{
      width: '80%',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
    },

    button: {
        width: '40%',
    },
   
   
  });
  
export default GoalInput;