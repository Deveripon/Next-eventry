import PaymentForm from "@/components/payment/PaymentForm";
import { getSingleEventDetails } from "@/DBQueries/events/events";

const PaymentPage = async ({ params: { id } }) => {
    const event = await getSingleEventDetails(id);

    return (
        <section className='container'>
            <div className='event h-32 w-[400px]'></div>
            <div className='bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12'>
                <h2 className='font-bold text-xl mb-8'>Payment Details</h2>
                <h3>
                    Payment For{" "}
                    <span className='text-indigo-600'>{event.name}</span>
                </h3>
                <PaymentForm eventId={id} />
            </div>
        </section>
    );
};

export default PaymentPage;

