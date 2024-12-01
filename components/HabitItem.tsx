import { View } from "react-native";
import { IconButton, List } from "react-native-paper";

interface HabitItemParams {
  item: any;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const HabitItem = ({ item, onEdit, onDelete }: HabitItemParams) => {
  return (
    <List.Item
      title={item.name}
      right={() => (
        <View style={{ flexDirection: "row" }}>
          <IconButton icon="pencil" onPress={() => onEdit(item.id)} />
          <IconButton icon="delete" onPress={() => onDelete(item.id)} />
        </View>
      )}
    />
  );
};
export default HabitItem;
