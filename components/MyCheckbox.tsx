import { Checkbox } from "react-native-paper";
import { useState } from "react";

const MyCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      status={checked ? "checked" : "unchecked"}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default MyCheckbox;
