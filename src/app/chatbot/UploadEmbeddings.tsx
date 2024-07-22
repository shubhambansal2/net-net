import axios from 'axios';

export default async function UploadEmbeddings(websiteURL: string) {
    try {

        // Prepare the payload with mandatory fields
        const payload: { url: string} = {
            url: websiteURL,
        };
        const response = await axios.post('https://desolate-bastion-55476-3d3016c3fa1a.herokuapp.com/uploadembeddingsurl', payload);
        return response.data.response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}