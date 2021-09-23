import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '25%',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 25,
    backgroundColor: '#003A70',
  },
  headerTitle: {
    fontSize: 24,
    justifyContent: 'center',
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#FFCB05',
    fontFamily: 'Pokemon',
  },
  pikachu: {
    zIndex: -1,
    top: 35,
  },
  searchIcon: {
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 15,
  },
  titleAndSearchWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleAndSearchWrapper}>
        <Text style={styles.headerTitle} testID="header-title">
          Mobile Pokedex
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/025.png')}
          style={styles.pikachu}
        />
      </View>
    </View>
  );
};
