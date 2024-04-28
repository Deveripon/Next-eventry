import { User } from "@/Models/user";
import { connectToMongoDB } from "@/services/mongoDB";
import { transformMongoIdFromSIngleObject } from "@/utils";

export async function createUser(userData) {
    await connectToMongoDB();
    return await User.create(userData);
}

export async function findUserByCredentials(credentials) {
    await connectToMongoDB();

    const user = await User.findOne(credentials).lean();
    if (user) {
        return transformMongoIdFromSIngleObject(user);
    }
    return null;
}

