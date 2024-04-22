import Link from "next/link";

const ActionButtons = ({ formDetails }) => {
    return (
        <div className={`w-full flex gap-4 mt-4 ${formDetails && `flex-1`}`}>
            <button className='w-full bg-indigo-600 hover:bg-indigo-800'>
                Interested
            </button>

            <Link
                href={"/payment"}
                className='w-full flex justify-center items-center text-center rounded-md bg-green-600 hover:bg-green-800'>
                Going
            </Link>
        </div>
    );
};

export default ActionButtons;

