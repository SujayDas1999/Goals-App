import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={props.onDeleteitem.bind(this, props.id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.itemData.item.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
