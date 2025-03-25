'use client'
import { configureStore } from '@reduxjs/toolkit'
import userAuth from './ReduxFunctions'
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedAuthReducer = persistReducer(persistConfig, userAuth);

export const store = configureStore({
  reducer: {
    Auth: persistedAuthReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore non-serializable values in actions or state
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['Auth.somePathWithNonSerializableValues'], // Update paths as needed
      },
    }),
})


export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch