import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage
}

const reducer = combineReducers({
    counter: counterReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer
})

export default store;