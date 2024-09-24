import mongoose from 'mongoose';

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };


async function dbConnect(): Promise<void> {
    console.log("Starting with db connection ")
    if(connection.isConnected) {
        console.log("Already connected to database");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://shubhampb95:KcGCDmsyLiC2aDYj@cluster0.kwfne.mongodb.net/blueberry_db_nosql?retryWrites=true&w=majority&appName=Cluster0', {});

        connection.isConnected = db.connections[0].readyState
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log("Database Connection failed", error);
        // process.exit(1);
    }
}

export default dbConnect;