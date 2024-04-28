"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
    const { auth, setAuth } = useAuth();
    const router = useRouter();
    const logout = () => {
        setAuth(null);
        localStorage.removeItem("auth");
        router.push("/auth/login");
    };

    return (
        <>
            {auth ? (
                <>
                    <li>
                        <span>
                            Hello, {auth?.name} |{" "}
                            <a
                                onClick={logout}
                                className='bg-transparent cursor-pointer'>
                                Logout
                            </a>
                        </span>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link href='/auth/register'>Register</Link>
                    </li>
                    <li>
                        <Link href='/auth/login'>Login</Link>
                    </li>
                </>
            )}
        </>
    );
};

export default AuthButtons;

