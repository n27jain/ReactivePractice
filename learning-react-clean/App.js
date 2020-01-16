import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
export default function App() {

  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode ] = useState(false);
 // Print to consol

  // const addGoalHandler = () => {
  //   console.log(enteredGoal);
  // };

  const addGoalHandler = goalTitle => {
    // setCourseGoals([...courseGoals, enteredGoal]);    OR
    setCourseGoals(currentGoals => [...currentGoals, 
      { id: Math.random().toString(),
        value: goalTitle
      }
    ]);
    setIsAddMode(false);

  };
  const clearGoalHandler = () => {
    // setCourseGoals([...courseGoals, enteredGoal]);    OR
    setCourseGoals(currentGoals => []);
    setIsAddMode(false);
  };

  const clearSingleHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter( 
        (goal)  => goal.id !== goalId
        ); 
    })
  }
  const exitScreen = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button color = 'green'  title = "Edit" onPress = { () => setIsAddMode(true)} />
      </View>
      <View style={styles.button}>
        <Button color = 'red' title = "Erase" onPress = { clearGoalHandler} />
      </View>
      <GoalInput onExitScreen = {exitScreen} visible = {isAddMode} onAddGoalHandler = {addGoalHandler} onClearGoalHandler = {clearGoalHandler}/>
      
      <FlatList
      keyExtractor = {(item, index) => item.id} 
        data = {courseGoals}
        renderItem = {itemData => 
          <GoalItem onDelete = {clearSingleHandler.bind(this, itemData.item.id)} title = {itemData.item.value}/>}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding : 40,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingStart: 10,

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
 
  listItem:{
    padding: 10,
    borderColor: '#ccc',
    borderColor: 'black',
    borderWidth:1,
    margin: 10,
    
  },
  button:{
    
    marginBottom: 10,
    
    alignItems: 'center',
  },

});
