import React, {useState} from 'react';
import { StyleSheet, Text,
         View, FlatList
       } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setCourseGoals(courseGoals => [...courseGoals,
       {id: Math.random().toString(), value: goal}]);
  }
  return (
    <View style={styles.screen}>
        <GoalInput
         onAddGoal = {addGoalHandler}/>

         {courseGoals.length!=0?
         <FlatList data={courseGoals}
          renderItem={itemData =><GoalItem onDelete={() => console.log('Long Pressed')} itemData = {itemData}/>}
          keyExtractor={item => item.id}/>
        :
        <Text>Start adding your goals!</Text>
        }   
    </View>
  );
}

const styles = StyleSheet.create({
   screen:{
    padding: 50
   }
});
