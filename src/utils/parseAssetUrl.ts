/*
* @params: {url: string} as POKEAPI url
*/

export const parseAssetUrl = (url: string): string => {
  const id = url.split('/').filter(item => !isNaN(Number(item))).filter(item => item !== '')[0]

  const parseID = () => {
  if (Number(id) < 10) {
      return `00${Number(id)}`;
    } else if (Number(id) >= 10 && Number(id) < 100) {
      return `0${Number(id)}`;
    } else if (Number(id) > 99) {
      return id
    }
  }

  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${parseID()}.png`
}
