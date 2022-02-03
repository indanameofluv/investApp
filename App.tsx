import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>
      {`
        here's how to start splendid investment.
        Let's get started!!!wowowow
      `}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 20,
    color: 'purple',
    textAlign: 'center',
  }
});

//一先ずreactnavigationのやつインストールする。
