import {Client, SpaceStatus} from "@gradio/client";
import { Buffer } from 'buffer';
import {Console} from "inspector"; // Ensure Buffer is imported from the polyfilled version

interface resp {

}

export default async function Response(input: string) {
    try {
        const client = await Client.connect("Shubhambansal2/mistralai-Mixtral-8x7B-Instruct-v0.1");
        const result = await client.predict("/predict", { 		
                        param_0: input,
        });
        // @ts-ignore
        console.log(result.data);
        // @ts-ignore
        return result.data[0]
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