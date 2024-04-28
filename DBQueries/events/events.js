import { Events } from "@/Models/event";
import { connectToMongoDB } from "@/services/mongoDB";
import {
    transformMongoIdFromSIngleObject,
    transformMongoIdInArray,
} from "@/utils";
import mongoose from "mongoose";

export async function getAllEvents() {
    await connectToMongoDB();
    const allEvents = await Events?.find().lean();
    return transformMongoIdInArray(allEvents);
}

export const getSingleEventDetails = async (id) => {
    await connectToMongoDB();
    const event = await Events?.findById(id).lean();
    return transformMongoIdFromSIngleObject(event);
};

export const updateInterest = async (eventId, userId) => {
    await connectToMongoDB();
    const event = await Events.findById(eventId);
    if (event) {
        const foundUsers = event.interested_ids.find(
            (id) => id.toString() === userId
        );
        if (foundUsers) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(userId));
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(userId));
        }
    }
    event.save();
};

export async function updateGoing(eventId, userId) {
    const event = await Events.findById(eventId);
    if (event) {
        event.going_ids.push(new mongoose.Types.ObjectId(userId));
    }
    event.save();
}

