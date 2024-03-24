import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div class="flex min-h-full flex-col justify-center">

                <div className="bg-bnb-blue text-white py-20 pb-5">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold">BNB Bank</h1>
                    </div>
                </div>


                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <div class="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="email"
                                    required
                                    placeholder="username"
                                    className="
                                        block 
                                        w-full 
                                        rounded-xl
                                        border-2
                                        border-bnb-light-blue
                                        placeholder-text-bnb-light-blue
                                        py-3
                                        text-gray-900 
                                        shadow-sm 
                                        ring-1 
                                        ring-inset 
                                        ring-gray-300 
                                        focus:ring-2 
                                        focus:ring-inset 
                                        focus:ring-indigo-600 
                                        md:text-md 
                                        sm:leading-6
                                    "
                                />
                            </div>
                        </div>
                        <div>
                            <div class="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="email"
                                    className="
                                        block 
                                        w-full 
                                        rounded-xl
                                        border-2
                                        border-bnb-light-blue
                                        placeholder-text-bnb-light-blue
                                        py-3
                                        text-gray-900 
                                        shadow-sm 
                                        ring-1 
                                        ring-inset 
                                        ring-gray-300 
                                        focus:ring-2 
                                        focus:ring-inset 
                                        focus:ring-indigo-600 
                                        md:text-md 
                                        sm:leading-6
                                    "
                                />
                            </div>
                        </div>

                        <div>
                            <div class="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    autocomplete="current-password"
                                    required
                                    className="
                                        block 
                                        w-full 
                                        rounded-xl
                                        border-2
                                        border-bnb-light-blue
                                        placeholder-text-bnb-light-blue
                                        py-3
                                        text-gray-900 
                                        shadow-sm 
                                        ring-1 
                                        ring-inset 
                                        ring-gray-300 
                                        focus:ring-2 
                                        focus:ring-inset 
                                        focus:ring-indigo-600 
                                        md:text-md 
                                        sm:leading-6
                                    "
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                class="
                                    bg-bnb-blue
                                    flex w-full 
                                    justify-center 
                                    rounded-sm  
                                    px-3 
                                    py-3
                                    text-sm 
                                    font-semibold 
                                    leading-6 
                                    text-white 
                                    shadow-sm 
                                    focus-visible:outline 
                                    focus-visible:outline-2 
                                    focus-visible:outline-offset-2 
                                    focus-visible:outline-indigo-600
                                "
                            >
                                SIGN UP
                            </button>
                        </div>
                    </form>

                    <div className="border-t-4 border-bnb-light-blue w-5 mx-auto my-10"></div>

                    <p class="mt-10 text-center text-sm text-gray-500">
                        <a href="#" class="text-bnb-blue font-semibold leading-6">
                            Already have a account?
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
