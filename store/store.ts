import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../components/features/gitHubSlice";
import { gitHubApi } from "../components/api/api";
import { persistedReducer } from '../components/features/gitHubSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    [gitHubApi.reducerPath]: gitHubApi.reducer,
    // gitHub: userSlice,
    gitHub: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(gitHubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
