import MyFAB from "./MyFAB";
import HabitList from "./HabitList";
import HabitEditForm from "./HabitEditForm";

export default function HabitsScreen() {
  return (
    <>
      <HabitList></HabitList>
      <MyFAB></MyFAB>
      <HabitEditForm></HabitEditForm>
    </>
  );
}
