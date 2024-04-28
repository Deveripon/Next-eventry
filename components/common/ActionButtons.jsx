"use client";

import { addInterestedEvent } from "@/actions";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ActionButtons = ({ formDetails, eventId, interestedId, goingId }) => {
    const router = useRouter();
    const { auth, setAuth } = useAuth();
    const isInterested = interestedId?.find((id) => id === auth?.id);
    const isGoing = goingId?.find((id) => id === auth?.id);

    const [isPending, startTransition] = useTransition();
    const [interested, setInterested] = useState(isInterested);
    const [going, setGoing] = useState(isGoing);

    async function toggleInterest() {
        if (auth) {
            await addInterestedEvent(eventId, auth?.id);
            setInterested(!interested);
        } else {
            router.push("/auth/login");
        }
    }

    const handleGoing = () => {
        if (auth) {
            router.push(`/payment/${eventId}`);
        } else {
            router.push("/auth/login");
        }
    };

    return (
        <div className={`w-full flex gap-4 mt-4 ${formDetails && `flex-1`}`}>
            <button
                onClick={() =>
                    startTransition(() => {
                        toggleInterest();
                    })
                }
                className={`${interested ? "bg-indigo-600" : "bg-gray-600"}
                w-full hover:bg-indigo-800`}>
                <span>
                    {isPending ? (
                        <span>Loading...</span>
                    ) : (
                        <span>Interested</span>
                    )}
                </span>
            </button>

            <button
                disabled={auth && going}
                onClick={handleGoing}
                className={` ${
                    going ? "bg-green-800 cursor-not-allowed " : "bg-gray-600 "
                } w-full flex justify-center items-center text-center rounded-md hover:bg-green-800`}>
                Going
            </button>
        </div>
    );
};

export default ActionButtons;

