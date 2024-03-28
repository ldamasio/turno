import Dropdown from '@/Components/Dropdown';

export default function Menu() {
    return (
        <div className="-mt-12">
            <div className="absolute">
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

                    <Dropdown.Content
                        align="left"
                        header="BNB BANK"
                        items={[
                            {
                                text: 'Item 1',
                                href: '/item1',
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                text: 'Item 2',
                                href: '/item2',
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 20l4-16m2 16l4-16m-6 5h14M5 20h14"
                                        />
                                    </svg>
                                ),
                            },
                            // Add more items as needed
                        ]}
                    />

                    {/* <Dropdown.Content>
                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                        <Dropdown.Link href={route('logout')} method="post" as="button">
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content> */}
                </Dropdown>
            </div>
        </div>
    );
}
