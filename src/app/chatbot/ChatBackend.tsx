import axios from 'axios';
import {Client, SpaceStatus} from "@gradio/client";
import { Buffer } from 'buffer';
import {Console} from "inspector"; // Ensure Buffer is imported from the polyfilled version

interface resp {

}

export default async function ChatBackend(input: string, sessionId: string, industry: string | null, role: string | null, botname: string | null, companyname: string | null, rag: boolean | false) {
    try {

        // Prepare the payload with mandatory fields
        const payload: { text: string, session_id: string, industry?: string, role?: string , botname?: string, companyname?: string , is_rag?: number} = {
            text: input,
            session_id: sessionId
        };

        
        if (industry) {
            payload.industry = industry;
            if (role) {
                payload.role = role;
            } else {
                payload.role = "Customer Support";
            }
            if (botname) {
                payload.botname = botname;
            }
            if (companyname) {
                payload.companyname = companyname;
            }
        } else {
            payload.industry = '';
            payload.role = '';
            payload.botname = '';
            payload.companyname = '';
        }
        if (rag) {
            payload.is_rag = 1;
        }

      // Make a POST request to your Flask app on Heroku
      const response = await axios.post('https://desolate-bastion-55476-3d3016c3fa1a.herokuapp.com/chat', payload);
      // Return the response from your Flask app
      // @ts-ignore
      const data: ResponseData = response.data
      // Check if the response contains the expected data
    if (data && data.response) {
        console.log(data);
        return data.response;
      } else {
        return "Some issue occurred, please retry again.";
      }
    } catch (error) {
      console.log(error);
      return "Some issue occurred, please retry again.";
    }
}