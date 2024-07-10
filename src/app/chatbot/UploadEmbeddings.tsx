import axios from 'axios';

export default async function UploadEmbeddings(websiteURL: string) {
    try {

        // Prepare the payload with mandatory fields
        const payload: { url: string} = {
            url: websiteURL,
        };
        const response = await axios.post('https://fresh-chelsey-blueberryai-923a4757.koyeb.app/uploadembeddingsurl', payload);
        return response.data.response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}