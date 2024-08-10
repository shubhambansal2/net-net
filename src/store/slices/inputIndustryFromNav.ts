
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputIndustryFromNavState {
    value: string;
}

const initialState: InputIndustryFromNavState = {
    value: '',
};

const inputIndustryFromNavSlice = createSlice({
    name: 'inputIndustryFromNav',
    initialState,
    reducers: {
        setInputIndustryFromNav: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setInputIndustryFromNav } = inputIndustryFromNavSlice.actions;
export default inputIndustryFromNavSlice.reducer;
