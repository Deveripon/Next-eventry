import DetailsSection from "@/components/details/DetailsSection";
import HeroSection from "@/components/details/HeroSection";
import VanueMap from "@/components/details/VanueMap";

const page = () => {
    return (
        <>
            <HeroSection />

            <section className='container'>
                <div className='grid grid-cols-5 gap-12 my-12'>
                    <DetailsSection />
                    <VanueMap />
                </div>
            </section>
        </>
    );
};

export default page;

