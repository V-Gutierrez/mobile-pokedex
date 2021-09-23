import {capitalizeStringFirstIndex} from './../../src/utils/capitalizeStringFirstIndex';

describe('capitalizeStringFirstIndex util', () => {
  it('should capitalize the first letter of a string', () => {
    const sample = 'pokedex';

    const capitalizedSample = capitalizeStringFirstIndex(sample);

    expect(capitalizedSample).toStrictEqual('Pokedex');
  });
});
