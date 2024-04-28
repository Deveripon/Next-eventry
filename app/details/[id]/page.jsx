import DetailsSection from "@/components/details/DetailsSection";
import HeroSection from "@/components/details/HeroSection";
import VanueMap from "@/components/details/VanueMap";
import { getSingleEventDetails } from "@/DBQueries/events/events";
import { Suspense } from "react";

export async function generateMetadata({ params: { id } }) {
    const event = await getSingleEventDetails(id);

    return {
        title: `Eventry | ${event?.name}`,
        description: event?.details,
        openGraph: {
            images: [event?.imageUrl],
        },
    };
}

const eventDetailsPage = async ({ params: { id } }) => {
    return (
        <Suspense fallback={"loading ....."}>
            <HeroSection id={id} />
            <section className='container'>
                <div className='grid grid-cols-5 gap-12 my-12'>
                    <DetailsSection id={id} />
                    <VanueMap id={id} />
                </div>
            </section>
        </Suspense>
    );
};

export default eventDetailsPage;

