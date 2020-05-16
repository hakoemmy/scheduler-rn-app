import React, {useState} from 'react';
import { StyleSheet, Text,
         View, TextInput, Button,
         ScrollView, FlatList
       } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const getInputGoalHandler = (goal) => {
     setEnteredGoal(goal);
  }
  const addGoalHandler = () => {
    setCourseGoals(courseGoals => [...courseGoals,
       {id: Math.random().toString(), value: enteredGoal}]);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
       <TextInput placeholder="Course Goal" 
       style={styles.input} 
       onChangeText={getInputGoalHandler}
       value={enteredGoal}
       />
       <Button title="ADD" onPress={addGoalHandler}/>
      </View>
        {courseGoals.length!=0?
         <FlatList data={courseGoals}
         renderItem={({item: {value}}) =>(
            <View style={styles.listItem}>
               <Text>{value}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          />
        :
        <Text>Start adding your goals!</Text>
        }   
    </View>
  );
}

const styles = StyleSheet.create({
   screen:{
    padding: 50
   },
   inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
   },
   input: {
    width:'80%',
    borderBottomColor:'black',
    borderBottomWidth: 1
    },
    listItem:{
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#ccc',
      borderColor:'#f0f0',
      borderWidth: 1
    }
});
