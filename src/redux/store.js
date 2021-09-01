// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import phonebookReducer from './phonebook-reducers';

// export const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// export const store = configureStore({
//   reducer: { contacts: persistReducer(persistConfig, phonebookReducer) },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);

//1.0
import { configureStore } from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer, ***********удаляем local storage
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';***********удаляем local storage
import phonebookReducer from './phonebook-reducers';

// export const persistConfig = { **************удалили local storage
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };                              *************удалили local storage

export const store = configureStore({
  reducer: { contacts: phonebookReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
