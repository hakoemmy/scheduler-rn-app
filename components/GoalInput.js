import React, {useState} from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';
const goalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const getInputGoalHandler = (goal) => {
        setEnteredGoal(goal);
     }
    return (
        <View style={styles.inputContainer}>
          <TextInput placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={getInputGoalHandler}
          value={enteredGoal}/>
         <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}/>
       </View>
    );
}
export default goalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
       },
       input: {
        width:'80%',
        borderBottomColor:'black',
        borderBottomWidth: 1
       }

});
