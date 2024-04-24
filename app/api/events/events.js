import { Events } from "@/Models/event";

export async function getAllEvents() {
    const allEvents = await Events.find();
    return allEvents;
}

