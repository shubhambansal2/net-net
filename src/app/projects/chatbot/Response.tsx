import axios from 'axios';
import {Client, SpaceStatus} from "@gradio/client";
import { Buffer } from 'buffer';
import {Console} from "inspector"; // Ensure Buffer is imported from the polyfilled version

interface resp {

}

export default async function Response(input: string, sessionId: string, industry: string | null, role: string | null) {
    try {

        // Prepare the payload with mandatory fields
        const payload: { text: string, session_id: string, industry?: string, role?: string } = {
            text: input,
            session_id: sessionId
        };

        // Add industry and role to the payload if they are present
        if (industry) {
            payload.industry = industry;
        }
        if (role) {
            payload.role = role;
        }
      // Make a POST request to your Flask app on Heroku
      const response = await axios.post('https://desolate-bastion-55476-3d3016c3fa1a.herokuapp.com/chat', payload);
      // Return the response from your Flask app
      // @ts-ignore
      return response.data.response;
    } catch (error) {
      console.log(error);
      throw error;
    }
}