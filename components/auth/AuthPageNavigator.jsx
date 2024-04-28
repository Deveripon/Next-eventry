import Link from "next/link";

const AuthPageNavigator = ({ register }) => {
    return (
        <>
            {register ? (
                <span className='text-center text-xs text-gray-500'>
                    Already have an account?
                    <Link
                        className='underline hover:text-indigo-600'
                        href='/auth/login'>
                        Login
                    </Link>
                </span>
            ) : (
                <span className='text-center text-xs text-gray-500'>
                    Don{" ' "}t have an account?
                    <Link
                        className='underline hover:text-indigo-600'
                        href='/auth/register'>
                        Register
                    </Link>
                </span>
            )}
        </>
    );
};

export default AuthPageNavigator;

