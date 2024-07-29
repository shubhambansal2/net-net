
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputIndustryState {
    value: string;
}

const initialState: InputIndustryState = {
    value: '',
};

const inputIndustrySlice = createSlice({
    name: 'inputIndustry',
    initialState,
    reducers: {
        setInputIndustryFromNav: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setInputIndustryFromNav } = inputIndustrySlice.actions;
export default inputIndustrySlice.reducer;
