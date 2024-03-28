import { useEffect, FormEventHandler } from 'react';
import { Link, Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Welcome() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        data.password_confirmation = data.password;

        if (data.password.length < 9) {
            showToast();
        } else {
            post(route('register'));
        }
    };

    const toast = document.getElementById('toast-top-right');

    function showToast() {
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 5000);
    }

    return (
        <GuestLayout>
            <Head title="Sign Up" />
            <form className="space-y-6" onSubmit={submit}>
                <div className="ml-3 mr-3">
                    <div>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="email"
                                required
                                placeholder="username"
                                onChange={(e) => setData('name', e.target.value)}
                                className="
                                            block 
                                            w-full 
                                            rounded-xl
                                            border-2
                                            border-bnb-light-blue
                                            placeholder-text-bnb-light-blue
                                            py-3
                                            shadow-sm 
                                            md:text-md 
                                            sm:leading-6
                                        "
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mt-6">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="email"
                                onChange={(e) => setData('email', e.target.value)}
                                className="
                                            block 
                                            w-full 
                                            rounded-xl
                                            border-2
                                            border-bnb-light-blue
                                            placeholder-text-bnb-light-blue
                                            py-3
                                            shadow-sm
                                            md:text-md 
                                            sm:leading-6
                                        "
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mt-6">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                                className="
                                            block 
                                            w-full 
                                            rounded-xl
                                            border-2
                                            border-bnb-light-blue
                                            placeholder-text-bnb-light-blue
                                            py-3
                                            shadow-sm
                                            md:text-md 
                                            sm:leading-6
                                        "
                            />
                        </div>
                    </div>
                </div>

                <div >
                    <button
                        type="submit"
                        className="
                                    bg-bnb-blue
                                    text-white
                                    flex w-full 
                                    justify-center 
                                    rounded-sm
                                    mt-10
                                    px-3 
                                    py-3
                                    text-sm 
                                    font-semibold 
                                    leading-6 
                                    text-white 
                                    shadow-sm 
                                "
                    >
                        SIGN UP
                    </button>
                    <div id="toast-top-right" class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-white bg-red-500 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 hidden" role="alert">
                        <div class="text-sm font-normal">The password field must be at least 8 characters.</div>
                    </div>

                </div>
            </form>

            <div className="border-t-4 border-bnb-light-blue w-5 mx-auto my-8"></div>

            <p className="mt-8 mb-20 text-center text-sm">
                <a href="login" className="text-bnb-blue font-semibold leading-6">
                    Already have a account?
                </a>
            </p>
        </GuestLayout>
    );
}
