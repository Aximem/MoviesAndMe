// Store/configureStore.js

import { createStore, combineReducers } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'
import setAvatar from './Reducers/avatarReducer'

export default createStore(combineReducers({toggleFavorite, setAvatar}))
