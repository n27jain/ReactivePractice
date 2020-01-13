import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Image, Vibration, TextInput, ScrollView, FlatList } from 'react-native';
import { setConfigurationAsync } from 'expo/build/AR';
import GoalItem from './components/GoalItem'
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
    setCourseGoals(currentGoals => [...currentGoals, 
      { key: Math.random().toString(),
        value: enteredGoal
      }
    ]);

  };
  const clearGoalHandler = () => {
    // setCourseGoals([...courseGoals, enteredGoal]);    OR
    setCourseGoals(currentGoals => []);

  };

  return (
    <View style={styles.screen}>

      <FlatList 
        data = {courseGoals}
        renderItem = {itemData => <GoalItem title = {itemData.item.value}/>}
        />
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
    padding: 10,
    borderColor: '#ccc',
    borderColor: 'black',
    borderWidth:1,
    margin: 10,
    

  },


});
