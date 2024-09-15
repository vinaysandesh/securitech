// src/store/store.js
import { configureStore } from '@reduxjs/toolkit'; 
import counterReducer from '../reducer/index';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, counterReducer)
const store = configureStore({
  reducer: persistedReducer, 
});
export   {store }
export const persistor = persistStore(store)