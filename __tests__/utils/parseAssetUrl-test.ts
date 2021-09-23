import {parseAssetUrl} from 'utils';

describe('parseAssetUrl utils', () => {
  it('should return a url leading to improved pokemon asset', () => {
    const parse = parseAssetUrl('https://pokeapi.co/api/v2/pokemon/1');

    expect(parse).toStrictEqual(
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    );
  });
});
