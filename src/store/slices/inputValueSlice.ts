
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputValueState {
    value: string;
}

const initialState: InputValueState = {
    value: '',
};

const inputValueSlice = createSlice({
    name: 'inputValue',
    initialState,
    reducers: {
        setInputValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setInputValue } = inputValueSlice.actions;
export default inputValueSlice.reducer;
