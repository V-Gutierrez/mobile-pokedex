import {Container} from '../../components';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokeball: {
    marginTop: 25,
    width: 300,
    height: 300,
  },
  errorTitle: {
    color: '#FFCB05',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
  },
  errorMessage: {
    color: '#fff',
    fontSize: 20,
  },
  errorMessagesBox: {
    marginTop: 40,
    alignItems: 'center',
  },
  restartButton: {
    marginTop: 50,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ff0000',
    borderRadius: 25,
  },
});

interface Props {
  onRestart: () => void;
}

export const ErrorScreen: React.FC<Props> = ({onRestart}) => {
  return (
    <Container>
      <View style={styles.container}>
        <Image
          style={styles.pokeball}
          source={require('../../assets/images/pokeball.png')}
        />
        <Text style={styles.errorTitle}>
          Gotta catch 'em all!... and we did.{' '}
        </Text>
        <View style={styles.errorMessagesBox}>
          <Text style={styles.errorMessage}>Desculpe!</Text>
          <Text style={styles.errorMessage}>Parece que houve um erro!</Text>
          <TouchableOpacity style={styles.restartButton} onPress={onRestart}>
            <Text style={styles.errorMessage}>Reeniciar o app</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};
