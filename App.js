import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { UserDetail } from './src/screen/Home/UserDetail';

export default function App() {
  return (
   
    <View style={styles.container}>
    
    <UserDetail/>
    
    <StatusBar style="auto" />
  </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
