import { useEffect, FormEventHandler } from 'react';
import { Link, Head, useForm } from '@inertiajs/react';

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

        post(route('register'));
    };

    return (
        <>
            <Head title="Sign Up" />
            <div className="flex min-h-full flex-col justify-center">

                <div className="bg-bnb-blue text-white py-20 pb-5">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold">BNB Bank vbeta</h1>
                    </div>
                </div>


                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ml-5 mr-5">
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
                        </div>
                    </form>

                    <div className="border-t-4 border-bnb-light-blue w-5 mx-auto my-8"></div>

                    <p className="mt-8 mb-20 text-center text-sm">
                        <a href="#" className="text-bnb-blue font-semibold leading-6">
                            Already have a account?
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
