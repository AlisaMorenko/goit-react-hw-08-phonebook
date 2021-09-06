import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './Phonebook/phonebook-reducers';
import authReducer from './Auth/auth-slice';

// const middleware = [
//   //если заменить на GetDefaultMiddlewareOptions ошибка пропадает, так же репета вроде что рассказівал
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];
//немного другой персистконфиг:

// const persistConfig = { ---------------const authPersistConfig = {
//   key: 'contacts',-----------------------key: 'auth',
//   storage,
//   blacklist: ['filter'],-----------------whitelist: ['token'],
// };

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: phonebookReducer,
  },
  // reducer: { contacts: phonebookReducer }, мой, кот біл
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
