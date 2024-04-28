"use server";

import {
    getSingleEventDetails,
    updateGoing,
    updateInterest,
} from "@/DBQueries/events/events";
import { createUser, findUserByCredentials } from "@/DBQueries/users/user";
import EmailTemplate from "@/email/EmailTemplate";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";

export async function registerUser(formData) {
    const userData = Object.fromEntries(formData);
    await createUser(userData);
    redirect("/auth/login");
    console.log("user created successfully");
}

export async function performLogin(formData) {
    try {
        const credentials = {};
        credentials.email = formData.get("email");
        credentials.password = formData.get("password");
        if (!credentials.email || !credentials.password) {
            throw new Error("Invalid credentials");
        } else {
            const found = await findUserByCredentials(credentials);
            return found;
        }
    } catch (error) {
        throw error;
    }
}

export async function addInterestedEvent(eventId, userId) {
    try {
        await updateInterest(eventId, userId);
    } catch (error) {
        throw error;
    }
    revalidatePath("/");
}

export async function addGoingEvent(eventId, user) {
    try {
        const going = await updateGoing(eventId, user?.id);
        await sendEmail(eventId, user);
    } catch (error) {
        throw error;
    }
    revalidatePath("/");
    redirect("/");
}

export async function sendEmail(eventId, user) {
    const event = await getSingleEventDetails(eventId);
    const goingUser = await findUserByCredentials({
        _id: user?.id,
        name: user?.name,
    });
    const resend = new Resend(`${process.env.RESEND_API_KEY}`);
    const message = `Hello ${goingUser?.name} you have successfully registerd on event ${event?.name}.Bring this email with you on the day.we will be happy to see you here`;

    resend.emails.send({
        from: "onboarding@resend.dev",
        to: goingUser?.email,
        subject: `Registration Successfull on Event ${event?.name}`,
        react: EmailTemplate({ message }),
    });
}

