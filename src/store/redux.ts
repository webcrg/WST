import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import workingTableSlice from './reducers/working-table-slice';

const rootReducer = combineReducers({
  workingTable: workingTableSlice,
});

const persistConfig = {
  key: 'wst',
  storage,
  whitelist: ['workingTable'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: [],
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
