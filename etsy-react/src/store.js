import { createStore } from 'redux'
import { cReduc } from './reducers/etsy'

const store = createStore(cReduc)

export default store