import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div>
            <div className="bg-bnb-blue text-white py-20 pb-5">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">BNB Bank vbeta</h1>
                </div>
            </div>

            <div className="flex min-h-full flex-col justify-center">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ml-5 mr-5">
                    {children}
                </div>
            </div>
        </div >
    );
}
