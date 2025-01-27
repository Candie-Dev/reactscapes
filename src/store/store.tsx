// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';  // Correct the import to match the actual filename


const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

