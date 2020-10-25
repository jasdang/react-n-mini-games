import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function TestComponent() {
  return (
    <View style={styles.container}>
      <Text>Test Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
