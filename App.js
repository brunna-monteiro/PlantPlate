import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import CategoriesScreen from "./screens/CategoriesScreen"

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.root}>
        <CategoriesScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    marginVertical: '10%',
    marginHorizontal: '5%',
  }
});
