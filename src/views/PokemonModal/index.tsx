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
    width: 225,
    height: 225,
    position: 'relative',
    top: 25,
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
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 60,
  },
  stats: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statsBox: {
    width: '45%',
    padding: 10,
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 15,
    borderRadius: 15,
    marginLeft: 15,
    width: '15%',
  },
  pokeBall: {
    width: 30,
    height: 30,
    position: 'relative',
    bottom: 18,
    left: 15,
  },
  boundaryContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tryAgainButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ff0000',
    marginTop: 25,
    borderRadius: 25,
  },
  tryAgainText: {
    color: '#fff',
    fontSize: 20,
  },
  errorText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  statexperience: {backgroundColor: '#fc7f7f'},
  statheight: {backgroundColor: '#48d0b0'},
  statorder: {backgroundColor: '#b1736c'},
  statweight: {backgroundColor: '#7c538c'},
  statspecies: {backgroundColor: '#ee1515'},
});

interface Props extends ModalProps {
  pokemonUrl: string;
}

export const PokemonModal: React.FC<Props> = props => {
  const {pokemonUrl, onRequestClose} = props;
  const [{data, loading, error}, refetch] = useAxios<PokemonData>(pokemonUrl);

  const breathing = new Animated.Value(0);

  Animated.timing(breathing, {
    toValue: 1.3,
    duration: 1000,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start();

  if (loading) {
    return (
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        statusBarTranslucent
        {...props}
      >
        <View style={[styles.boundaryContainer, styles.container]}>
          <AnimatedActivity />
        </View>
      </Modal>
    );
  }

  if (error) {
    return (
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        statusBarTranslucent
        {...props}
      >
        <View style={[styles.boundaryContainer, styles.container]}>
          <Text style={styles.errorText}>
            Houve um erro ao capturar este pokemon!
          </Text>
          <TouchableOpacity
            style={styles.tryAgainButton}
            onPress={() => refetch()}
          >
            <Text style={styles.tryAgainText}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

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
          <TouchableOpacity style={[styles.statsBox, styles.statexperience]}>
            <Text style={styles.stats}>
              Experiência base: {data?.base_experience}
            </Text>
            <Image
              style={styles.pokeBall}
              source={require('../../assets/images/pokeball.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.statsBox, styles.statheight]}>
            <Text style={[styles.stats]}>Altura: {data?.height}</Text>
            <Image
              style={styles.pokeBall}
              source={require('../../assets/images/pokeball.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.statsBox, styles.statorder]}>
            <Text style={[styles.stats]}>Ordem: {data?.order}</Text>
            <Image
              style={styles.pokeBall}
              source={require('../../assets/images/pokeball.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.statsBox, styles.statweight]}>
            <Text style={[styles.stats]}>Peso: {data?.weight}</Text>
            <Image
              style={styles.pokeBall}
              source={require('../../assets/images/pokeball.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.statsBox, styles.statspecies]}>
            <Text style={[styles.stats]}>
              Espécie:{' '}
              {data?.species?.name &&
                capitalizeStringFirstIndex(data?.species?.name)}
            </Text>
            <Image
              style={styles.pokeBall}
              source={require('../../assets/images/pokeball.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
