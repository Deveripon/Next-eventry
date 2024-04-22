import EventList from "@/components/landing/EventList";
import PageHeader from "@/components/landing/PageHeader";

const HomePage = () => {
    return (
        <section className='container'>
            <PageHeader />
            <EventList />
        </section>
    );
};

export default HomePage;

