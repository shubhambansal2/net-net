import { Client } from "@gradio/client";

// Listen for messages from the main thread
self.addEventListener('message', async (event) => {
    const { message, temperature } = event.data;

    try {
        // Initiate the Gradio client
        const app = await Client("https://theblueberry-ai-mistral-7b-v0-2.hf.space/--replicas/ybv3y/");

        // Indicate the start of the API call
        self.postMessage({ status: 'initiate' });

        // Make the API prediction
        const result = await app.predict("/chat", [message, temperature]);

        // Indicate that the API call is complete
        self.postMessage({ status: 'complete', output: result.data });

    } catch (error) {
        self.postMessage({ status: 'error', error: error.message });
    }
});

// Optionally, send a 'ready' message when the worker is initialized
self.postMessage({ status: 'ready' });
