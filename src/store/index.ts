// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import inputValueReducer from './slices/inputValueSlice';

export const store = configureStore({
    reducer: {
        inputValue: inputValueReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
