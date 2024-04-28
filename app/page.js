import EventList from "@/components/landing/EventList";
import PageHeader from "@/components/landing/PageHeader";
import { Suspense } from "react";

const HomePage = ({ searchParams: { query } }) => {
    return (
        <section className='container'>
            <PageHeader />
            <Suspense
                key={query}
                fallback='loading events ....'>
                <EventList query={query} />
            </Suspense>
        </section>
    );
};

export default HomePage;

