import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';

export default function Home({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen">
            <nav className="bg-bnb-mat-blue">
                <div>

                    <div className="flex items-center justify-between h-16 w-full">

                        <div className="hidden sm:flex sm:items-center ">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button
                                            type="button"
                                            className="px-3 py-2 border border-transparent text-white"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="flex items-center justify-center flex-1">
                            <div className="hidden sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    BNB Bank
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-bnb-mat-blue text-white">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2">
                            <div>
                                <div className="text-xs">
                                    Current balance
                                </div>
                                <div className="text-xl">
                                    $ 500.00
                                </div>
                            </div>
                            <div>

                                <div className="relative">
                                    <select
                                        className="block appearance-none w-full bg-transparent border border-transparent px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option>March 2021</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
