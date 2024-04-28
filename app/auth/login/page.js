import AuthPageNavigator from "@/components/auth/AuthPageNavigator";
import LoginForm from "@/components/auth/LoginForm";

const loginPage = () => {
    return (
        <>
            <h4 className='font-bold text-2xl'>Sign in</h4>
            <LoginForm />
            <AuthPageNavigator />
        </>
    );
};

export default loginPage;

