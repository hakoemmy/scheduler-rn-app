import React, {useState} from 'react';
import {TextInput, Button, View, StyleSheet, Modal} from 'react-native';
const goalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const getInputGoalHandler = (goal) => {
        setEnteredGoal(goal);
     }
     const addGoalInputHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
     }
    return (
        <Modal visible={props.visible} animationType="slide">
         <View style={styles.inputContainer}>
          <TextInput placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={getInputGoalHandler}
          value={enteredGoal}/>
          <View style={styles.btnContainer}>
              <View style={styles.btn}>
                <Button color="red" title="CANCEL" onPress={props.onCancelModal}/>
              </View>
              <View style={styles.btn}>
                 <Button title="ADD" onPress={addGoalInputHandler}/>
              </View>
          </View>
        </View>
       </Modal>
    );
}
export default goalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
       },
       input: {
        width:'60%',
        textAlign:'center',
        borderBottomColor:'black',
        borderBottomWidth: 1,
        marginBottom: 20
       },
       btnContainer:{
         flexDirection:"row",
         justifyContent:"space-between",
         width:'80%'
       },
       btn: {
           width: '30%'
       }

});
