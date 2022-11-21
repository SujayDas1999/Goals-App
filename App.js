import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [shouldShowModal, setShouldShowModal] = useState(false);

  function addGoalHandler(goalText) {
    setGoalsList((currentCourseGoals) => [
      { text: goalText, key: Math.random().toString() },
      ...currentCourseGoals,
    ]);
  }

  function renderGoalsList(itemData) {
    return (
      <GoalItem
        itemData={itemData}
        id={itemData.item.key}
        onDeleteitem={onDeleteGoalHandler}
      />
    );
  }

  function onDeleteGoalHandler(id) {
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  }

  function showModal() {
    setShouldShowModal((currentState) => !currentState);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add a new goal" color="#5e0acc" onPress={showModal} />
        <GoalInput
          addGoalHandler={addGoalHandler}
          endAddGoal={showModal}
          visible={shouldShowModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            renderItem={(itemData) => renderGoalsList(itemData)}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "black",
  },

  goalsContainer: {
    flex: 5,
  },
});
