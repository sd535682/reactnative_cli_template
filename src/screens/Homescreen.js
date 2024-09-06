import {StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.home_container}>
      <Text>Homescreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home_container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
