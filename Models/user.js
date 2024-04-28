import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        bio: {
            type: String,
            required: false,
            trim: true,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

export const User =
    mongoose.models.users || mongoose.model("users", userSchema);

