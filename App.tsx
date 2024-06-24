// Author: NGUYEN DINH DAT
// Date: 24/6/2024
////////// APP ANDROID //////////

//Library
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/Screen/LoginScreen'; // Đường dẫn tới LoginScreen.tsx


const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;
