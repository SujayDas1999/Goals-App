import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

function GoalInput({ addGoalHandler, visible, endAddGoal }) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(event) {
    setGoalText(event);
  }

  function onAddGoal() {
    addGoalHandler(goalText);
    endAddGoalClick();
    setGoalText("");
  }

  function endAddGoalClick() {
    endAddGoal();
  }

  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalText}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={endAddGoalClick} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80.5%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
    marginTop: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
