
import useAxios from 'axios-hooks'
import { AnimatedActivity } from '../../components'
import React from 'react'
import { Animated, Easing, Image, ImageBackground, Modal, ModalProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PokemonData } from '../../types'
import { parseAssetUrl, capitalizeStringFirstIndex } from '../../utils'

const breathing = new Animated.Value(0)

Animated.loop(
  Animated.sequence([
    Animated.timing(breathing, {
      toValue: 1.28,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true
    }),
    Animated.timing(breathing, {
      toValue: 1.3,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true
    })
  ])
).start()

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#3D7DCA',
    height: '100%',
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  pokemonWrapper: {
    width: '100%',
    backgroundColor: '#003A70',
    height: 400,
    borderBottomRightRadius: 100
  },
  pokemonName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFCB05',
    marginLeft: 15,
    marginTop: 30,
  },
  pokemonStats: {
    height: 25,
  },
  stats: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 15
  }
})



interface Props extends ModalProps {
  pokemonUrl: string
}


export const PokemonModal: React.FC<Props> = (props) => {
  const { pokemonUrl, onRequestClose } = props
  const [{ data, loading, error }, refetch] = useAxios<PokemonData>(pokemonUrl)


  return (
    <Modal
      animationType='slide'
      presentationStyle='formSheet'
      {...props}
    >
      <View style={styles.container}>

        <View style={styles.pokemonWrapper}>
          <Text style={styles.pokemonName}>{
            loading ? <AnimatedActivity /> : capitalizeStringFirstIndex(data?.name!)}
          </Text>

          <View style={[styles.centeredView]}>

            <Animated.View style={{ transform: [{ scale: breathing }] }} >
              <View style={styles.centeredView}>
                <Image style={styles.pokemonImage} source={{ uri: parseAssetUrl(pokemonUrl) }} />
              </View>
            </Animated.View >

          </View>

        </View>

        <View style={[styles.pokemonStats, styles.centeredView]}>

          <Text style={styles.stats}>Exp. base: {data?.base_experience}</Text>
          <Text style={styles.stats}>Altura: {data?.height}</Text>
          <Text style={styles.stats}>Ordem: {data?.order}</Text>
          <Text style={styles.stats}>Peso: {data?.weight}</Text>

          <TouchableOpacity style={styles.button} onPress={onRequestClose}>
            <Text>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal >
  )
}
