import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { axiosMiddleware } from '../utils/axios';
import rootReducer from '../actions/wallet/walletSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

// const rootReducer = combineReducers({ 
//   user: walletSlice,
// })
 
//combineReducers kullanılcak
const persistedReducer = persistReducer(persistConfig, rootReducer);

export function   makeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }).concat(axiosMiddleware)
  })

}



const store = makeStore();

export let persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
