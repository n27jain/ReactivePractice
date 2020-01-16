import React, {useState, useRef} from 'react';
import { Button, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';

const GameScreen = props =>  {
    const generateRandomBetween = (min,max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const rndNum = Math.floor(Math.random() * (max-min)) + min;
        return rndNum;
        
    };
    const[currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice));
    
    const min = useRef(1);
    const max = useRef(99);
    

    
    const lowerHandler = () => {
        max.current = currentGuess;
        setCurrentGuess(generateRandomBetween(min.current,max.current,0));
    };

    const higherHandler = () => {
        min.current = currentGuess;
        setCurrentGuess(generateRandomBetween(min.current,max.current,0));
    };
    return(
        <View style = {styles.screen}>
            <Text>Opponent's Guess </Text>
            <Text>{currentGuess}</Text>
            <Card style = {styles.buttonContainer}>
                <Button title = "Lower" onPress = {lowerHandler} color = "blue" />
                <Button title = "Higher"  onPress = {higherHandler} color = "red"/>
            </Card>
            <Text> Your Input</Text>
            <Text>{props.userChoice}</Text>
            <Card style = {styles.buttonContainer}>
            </Card>
            <Button title = " Finish" onPress = {props.replayGame}/>
        </View>
    )

}; 
const styles = StyleSheet.create({
    screen:{
        flex :1,
        padding :10,
        alignItems: 'center',

    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width : 300,
        maxWidth: '80%',

    }

});

export default GameScreen;