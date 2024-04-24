import mongoose from "mongoose";
const cached = {};
const mongodbUrI = process.env.MONGO_URI;
export const ConnectToMongoDB = async () => {
    if (!mongodbUrI) {
        throw new Error(
            "Please define the MONGO_URI environment variable inside .env.local"
        );
    }

    if (cached.connection) {
        return cached.connection;
    }

    if (!cached.promise) {
        cached.promise = await mongoose.connect(mongodbUrI);
    }
    try {
        cached.connection = await cached.promise;
    } catch (e) {
        cached.promise = undefined;
        throw e;
    }
    console.log(`Connection to MongoDB was successfully`);
    return cached.connection;
};

