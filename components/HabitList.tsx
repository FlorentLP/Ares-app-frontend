import { FlatList, View } from "react-native";
import { IconButton, List } from "react-native-paper";
import { useState } from "react";

const HabitList = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Cold shower",
    },
    {
      key: 2,
      name: "Programming",
    },
    {
      key: 3,
      name: "Walk 10 000 steps",
    },
    {
      key: 4,
      name: "Hit the gym",
    },
  ]);
  return (
    <FlatList
      data={habits}
      renderItem={({ item }) => (
        <List.Item
          title={item.name}
          right={() => (
            <View style={{ flexDirection: "row" }}>
              <IconButton
                icon="pencil"
                // onPress={() => handleEditHabit(item.id)}
              />
              <IconButton
                icon="delete"
                // onPress={() => handleDeleteHabit(item.id)}
              />
            </View>
          )}
        />
      )}
    />
  );
};
export default HabitList;
