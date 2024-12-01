import { FlatList } from "react-native";
import { useState } from "react";
import HabitItem from "./HabitItem";

const HabitList = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Cold shower",
    },
    {
      id: 2,
      name: "Programming",
    },
    {
      id: 3,
      name: "Walk 10 000 steps",
    },
    {
      id: 4,
      name: "Hit the gym",
    },
  ]);
  const handleEditHabit = (id: number) => {
    console.log(`Edit habit with ID: ${id}`);
  };

  const handleDeleteHabit = (id: number) => {
    console.log(`Delete habit with ID: ${id}`);
  };
  return (
    <FlatList
      data={habits}
      renderItem={({ item }) => (
        <HabitItem
          item={item}
          onEdit={handleEditHabit}
          onDelete={handleDeleteHabit}
        />
      )}
    />
  );
};
export default HabitList;
