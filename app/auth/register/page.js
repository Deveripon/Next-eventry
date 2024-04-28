import AuthPageNavigator from "@/components/auth/AuthPageNavigator";
import RegistrationForm from "@/components/auth/RegistrationForm";

const register = () => {
    return (
        <>
            <h4 className='font-bold text-2xl'>Register</h4>
            <RegistrationForm />
            <AuthPageNavigator register={true} />
        </>
    );
};

export default register;

