import DetailsSection from "@/components/details/DetailsSection";
import HeroSection from "@/components/details/HeroSection";
import VanueMap from "@/components/details/VanueMap";

const eventDetailsPage = async ({ params: { id } }) => {
    return (
        <>
            <HeroSection id={id} />
            <section className='container'>
                <div className='grid grid-cols-5 gap-12 my-12'>
                    <DetailsSection id={id} />
                    <VanueMap id={id} />
                </div>
            </section>
        </>
    );
};

export default eventDetailsPage;

