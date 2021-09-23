import useAxios from 'axios-hooks';
import {AnimatedActivity} from '../../components';
import React from 'react';
import {
  Animated,
  Easing,
  Image,
  Modal,
  ModalProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PokemonData} from '../../types';
import {parseAssetUrl, capitalizeStringFirstIndex} from '../../utils';
import {BackArrow} from '../../assets/icons';

const breathing = new Animated.Value(0);

Animated.timing(breathing, {
  toValue: 1.3,
  duration: 1000,
  easing: Easing.linear,
  useNativeDriver: false,
}).start();

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
    borderBottomRightRadius: 50,
    paddingTop: 50,
  },
  pokemonName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFCB05',
    marginLeft: 15,
    marginTop: 15,
  },
  pokemonStats: {
    height: 25,
  },
  stats: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 15,
    borderRadius: 15,
    marginLeft: 15,
    width: '15%',
  },
});

interface Props extends ModalProps {
  pokemonUrl: string;
}

export const PokemonModal: React.FC<Props> = props => {
  const {pokemonUrl, onRequestClose} = props;
  const [{data, loading}] = useAxios<PokemonData>(pokemonUrl);

  return (
    <Modal
      animationType="slide"
      presentationStyle="formSheet"
      statusBarTranslucent
      {...props}
    >
      <View style={styles.container}>
        <View style={styles.pokemonWrapper}>
          <TouchableOpacity style={styles.button} onPress={onRequestClose}>
            <BackArrow />
          </TouchableOpacity>

          <Text style={styles.pokemonName}>
            {loading ? (
              <AnimatedActivity />
            ) : (
              capitalizeStringFirstIndex(data?.name!)
            )}
          </Text>

          <View style={[styles.centeredView]}>
            <Animated.View style={{transform: [{scale: breathing}]}}>
              <View style={styles.centeredView}>
                <Image
                  style={styles.pokemonImage}
                  source={{uri: parseAssetUrl(pokemonUrl)}}
                />
              </View>
            </Animated.View>
          </View>
        </View>

        <View style={[styles.pokemonStats, styles.centeredView]}>
          <Text style={styles.stats}>Exp. base: {data?.base_experience}</Text>
          <Text style={styles.stats}>Altura: {data?.height}</Text>
          <Text style={styles.stats}>Ordem: {data?.order}</Text>
          <Text style={styles.stats}>Peso: {data?.weight}</Text>
        </View>
      </View>
    </Modal>
  );
};
