import React, {useState} from 'react';
import { StyleSheet, Text,
         View, FlatList, Button
       } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModel, setIsAddModel] = useState(false);

  const addGoalHandler = (goal) => {
    setCourseGoals(courseGoals => [...courseGoals,
       {id: Math.random().toString(), value: goal}]);
    setIsAddModel(false);
  }

  const cancelGoalAdditionHandler = () =>{
    setIsAddModel(false);
  }

  const onDeleteGoalHandler = goalId => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.id !== goalId);
    })
  }
  return (
    <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddModel(true)}/>
        <GoalInput
         visible={isAddModel}
         onCancelModal={cancelGoalAdditionHandler}
         onAddGoal = {addGoalHandler}/>
         {courseGoals.length!=0?
         <FlatList data={courseGoals}
          renderItem={itemData =><GoalItem onDelete={onDeleteGoalHandler} itemData = {itemData}/>}
          keyExtractor={item => item.id}/>
        :
        <Text style={styles.feedbackContainer}>I'll keep your goals!</Text>
        }   
    </View>
  );
}

const styles = StyleSheet.create({
   screen:{
    padding: 50
   },
   feedbackContainer:{
    textAlign:'center',
    marginTop: 20
  }
});
