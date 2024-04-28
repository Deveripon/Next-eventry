"use client";
import { performLogin } from "@/actions";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
    const { auth, setAuth } = useAuth();
    const [error, setErros] = useState("");
    const router = useRouter();

    async function onSubmit(e) {
        e.preventDefault();
        try {
            const formdata = new FormData(e.currentTarget);
            const found = await performLogin(formdata);
            if (found) {
                setAuth({ name: found?.name, id: found?.id });
                router.push("/");
            } else {
                throw new Error("Wrong username or password");
            }
        } catch (error) {
            setErros(error.message);
        }
    }
    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    return (
        <>
            <p className='text-red-500'>{error}</p>
            <form
                className='login-form'
                onSubmit={onSubmit}>
                <div>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                    />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                    />
                </div>

                <button
                    type='submit'
                    className='btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800'>
                    Login
                </button>
            </form>
        </>
    );
};

export default LoginForm;

