import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatbotState {
    industry: string;
    selectedRole: string;
    chatbotName: string;
    organisationName: string;
    websiteURL: string;
}

const initialState: ChatbotState = {
    industry: '',
    selectedRole: '',
    chatbotName: '',
    organisationName: '',
    websiteURL: ''
};

const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState,
    reducers: {
        setInputIndustry: (state, action: PayloadAction<string>) => {
            state.industry = action.payload;
        },
        setInputRole: (state, action: PayloadAction<string>) => {
            state.selectedRole = action.payload;
        },
        setInputChatbotName: (state, action: PayloadAction<string>) => {
            state.chatbotName = action.payload;
        },
        setInputOrganisationName: (state, action: PayloadAction<string>) => {
            state.organisationName = action.payload;
        },
        setInputWebsiteURL: (state, action: PayloadAction<string>) => {
            state.websiteURL = action.payload;
        }
    },
});

export const { setInputIndustry, setInputRole, setInputChatbotName, setInputOrganisationName, setInputWebsiteURL} = chatbotSlice.actions;
export default chatbotSlice.reducer;
