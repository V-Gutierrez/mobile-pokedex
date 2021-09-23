import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D7DCA',
  },
});

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#003A70" />
      {children}
    </SafeAreaView>
  );
};
