import {NextResponse} from 'next/server';
import Chatbot from '../../../models/chatbots.tsx'; // Adjust path as needed
import dbConnect from '../../../lib/dbConnect.ts';


export async function GET() {
    await dbConnect(); // Connect to MongoDB before fetching

    try {
        const chatbots = await Chatbot.find({}); // Fetch all chatbots
        console.log('Chatbots fetched:', chatbots);
        return NextResponse.json(chatbots);
    } catch (error) {
        console.error('Error fetching chatbot data:', error);
        return NextResponse.json({error: 'Failed to fetch chatbots'}, {status: 500});
    }
}
