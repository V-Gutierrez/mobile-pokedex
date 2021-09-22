import { configure } from 'axios-hooks'
import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})


export const setApi = () => configure({ axios })