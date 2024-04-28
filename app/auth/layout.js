const SubLayout = ({ children }) => {
    return (
        <section className='h-screen grid place-items-center'>
            <div className='max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md'>
                {children}
            </div>
        </section>
    );
};

export default SubLayout;

