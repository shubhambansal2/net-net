// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import inputValueReducer from './slices/inputValueSlice';
import chatbotReducer from './slices/chatbotSlice';
import inputIndustryFromNavReducer from './slices/inputIndustryFromNav';

export const store = configureStore({
    reducer: {
        inputValue: inputValueReducer,
        chatbot: chatbotReducer,
        inputIndustryFromNav: inputIndustryFromNavReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
