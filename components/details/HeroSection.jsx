import { getSingleEventDetails } from "@/app/api/events/events";
import Image from "next/image";
import ActionButtons from "../common/ActionButtons";

const HeroSection = async ({ id }) => {
    const event = await getSingleEventDetails(id);
    return (
        <section className='container'>
            <div className='bg-gradient-to-b relative w-full h-[450px] from-slate-200/20 to-slate-800/30'>
                <Image
                    fill
                    src={event?.imageUrl}
                    alt='Event 1'
                    className='h-[450px] mx-auto object-cover'
                />
            </div>

            <div className='flex items-end'>
                <div className='flex-auto py-4'>
                    <h1 className='font-bold text-2xl'>{event?.name}</h1>
                    <p className='text-[#9C9C9C] text-base mt-1'>
                        {event?.location}
                    </p>
                    <div className='text-[#737373] text-sm mt-1'>
                        <span>{event?.interested_ids?.length} Interested</span>
                        <span> | </span>
                        <span>{event?.going_ids?.length} Going</span>
                    </div>
                </div>

                <ActionButtons formDetails={true} />
            </div>
        </section>
    );
};

export default HeroSection;

