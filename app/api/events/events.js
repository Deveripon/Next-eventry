import { Events } from "@/Models/event";
import { cache } from "react";

export async function getAllEvents() {
    const allEvents = await Events?.find();
    return allEvents;
}

export const getSingleEventDetails = cache(async (id) => {
    const event = await Events?.findById(id);
    return event;
});

