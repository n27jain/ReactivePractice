import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Image, Vibration, TextInput } from 'react-native';
import { setConfigurationAsync } from 'expo/build/AR';

export default function App() {

  const [ enteredGoal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler =  (enteredText) => {
    setGoal(enteredText);
  };
  // const addGoalHandler = () => {
  //   console.log(enteredGoal);
  // };
  const addGoalHandler = () => {
    // setCourseGoals([...courseGoals, enteredGoal]);    OR
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);

  };
  const clearGoalHandler = () => {
    // setCourseGoals([...courseGoals, enteredGoal]);    OR
    setCourseGoals(currentGoals => []);

  };

  return (
    <View style={styles.screen}>

       <View style={styles.inputContainer}>

        <TextInput placeholder = "Course Goal" style = {styles.input}
          onChangeText = {goalInputHandler}
          value = {enteredGoal}
        />
        <Button style={styles.buttonFormat} title= "ADD"
          onPress = {addGoalHandler}
         />
        <Button style={styles.buttonFormat} title= "CLEAR"
        onPress = {clearGoalHandler}
        />
      sds
      

      </View>
      <View> 
          { courseGoals.map((goal) => <Text key= {goal}> {goal} </Text>) } 
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding : 40,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  tool:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: '50%',
    borderWidth: 1,
    padding: 8,
    
  },
  buttonFormat:{
    flex: 1,
  },
  listItem:{
    padding:'10',
    

  },


});
