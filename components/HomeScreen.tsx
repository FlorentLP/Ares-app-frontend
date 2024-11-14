import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import HabitsScreen from "./HabitsScreen";

const HabitsRoute = () => <HabitsScreen></HabitsScreen>;

const SportRoute = () => <Text>Sport</Text>;

const HealthRoute = () => <Text>Settings</Text>;

const DataRoute = () => (
  <Text>
    Data <br />
    stats <br />
    graph <br />
    monthly review <br />
    daily review <br />
    yearly review <br />
    and more <br />
  </Text>
);

const HomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "habits",
      title: "Habits",
      focusedIcon: "checkbox-multiple-marked",
      unfocusedIcon: "checkbox-multiple-marked-outline",
    },
    { key: "sport", title: "Sport", focusedIcon: "weight-lifter" },
    {
      key: "health",
      title: "Health",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "data",
      title: "Data",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    habits: HabitsRoute,
    sport: SportRoute,
    health: HealthRoute,
    data: DataRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default HomeScreen;