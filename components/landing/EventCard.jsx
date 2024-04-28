import { getSingleEventDetails } from "@/DBQueries/events/events";
import { transformObjectId } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import ActionButtons from "../common/ActionButtons";

const EventCard = async ({ id }) => {
    const event = await getSingleEventDetails(id);

    return (
        <div className='overflow-hidden rounded-md bg-[#242526]'>
            <Image
                src={event?.imageUrl}
                alt='Event 1'
                className='w-full'
                width={400}
                height={200}
            />

            <div className='p-3'>
                <Link
                    href={`/details/${event?.id}`}
                    className='font-bold text-lg'>
                    {event?.name}
                </Link>
                <p className='text-[#9C9C9C] text-sm mt-1'>{event?.location}</p>
                <div className='text-[#737373] text-sm mt-1'>
                    <span>{event?.interested_ids?.length} Interested</span>
                    <span> | </span>
                    <span>{event?.going_ids?.length} Going</span>
                </div>

                <ActionButtons
                    eventId={event?.id}
                    interestedId={transformObjectId(event?.interested_ids)}
                    goingId={transformObjectId(event?.going_ids)}
                />
            </div>
        </div>
    );
};

export default EventCard;

