import axios from 'axios';
import {Client, SpaceStatus} from "@gradio/client";
import { Buffer } from 'buffer';
import {Console} from "inspector"; // Ensure Buffer is imported from the polyfilled version

interface resp {

}

export default async function Response(input: string) {
    try {
      // Make a POST request to your Flask app on Heroku
      const response = await axios.post('https://desolate-bastion-55476-3d3016c3fa1a.herokuapp.com/chat', {
        text: input,
      });
      // Return the response from your Flask app
      return response.data.response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

   // const result = await app.predict("/predict", [
        //     exampleImage, 	// blob in 'image' Image component
        // ]);
        // console.log("########");
        // console.log(result);
        // console.log(result.data[0].label);
        // const app = await Client.connect("https://theblueberry-ai-mistral-7b-v0-2.hf.space/--replicas/ybv3y/", {space_status: (space_status: SpaceStatus) => console.log(space_status)});
        // console.log(app);
        // console.log("-------------");
        // const response = await app.predict("/chat", [
        //     input, 0 // number (numeric value between 0.0 and 1.0) in 'Temperature' Slider component
        // ]);
        // console.log(response);
        // console.log("~~~~~~");
        // @ts-ignore