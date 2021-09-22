import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

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
    borderBottomLeftRadius: 20,
    backgroundColor: '#fff'
  },
  headerTitle: {
    fontSize: 24,
    justifyContent: 'center',
    marginLeft: 10
  },
  pokeball: {
    zIndex: -1,
    opacity: 0.2,
    marginLeft: 75
  },
  searchIcon: {
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 15
  },
  titleAndSearchWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleAndSearchWrapper}>
        <Text style={styles.headerTitle}>Mobile Pokedex</Text>
      </View>
      <View>
        <Image source={require('../../assets/images/pokeball_background.png')} style={styles.pokeball} />
      </View>
    </View >
  )
}
