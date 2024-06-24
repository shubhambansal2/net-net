// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import inputValueReducer from './slices/inputValueSlice';
import chatbotReducer from './slices/chatbotSlice';

export const store = configureStore({
    reducer: {
        inputValue: inputValueReducer,
        chatbot: chatbotReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
