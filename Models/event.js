import mongoose, { Schema } from "mongoose";
const eventSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        details: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        imageUrl: {
            type: String,
            required: true,
            trim: true,
        },
        interested_ids: {
            type: Array,
            required: false,
            default: [],
            trim: true,
        },
        going_ids: {
            type: Array,
            required: false,
            default: [],
            trim: true,
        },
        swags: {
            type: Array,
            required: false,
            default: [],
            trim: true,
        },
    },
    { timeStamps: true }
);

export const Events =
    mongoose.models.events ?? mongoose.model("events", eventSchema);

