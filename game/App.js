import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import GameScreen from './screens/GameScreen'
import StartGameScreen from './screens/StartGameScreen';
import Header from './components/Header';
export default function App() {

  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  const replayGameHandler = () => {
    setUserNumber(0);
    content = <StartGameScreen onStartGame = {startGameHandler}/>;
  };
 
  let content = <StartGameScreen onStartGame = {startGameHandler}/>;

  if(userNumber){
    content = <GameScreen userChoice = {userNumber} replayGame = {replayGameHandler}/>
  }

  

  return (
    <View style = {styles.screen}>
      <Header title = "Guess a Number"/>
      {content}
     
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex :1,
  }
});
