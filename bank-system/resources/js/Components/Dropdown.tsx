import { useState, createContext, useContext, Fragment, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { Link, InertiaLinkProps } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

const DropDownContext = createContext<{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    toggleOpen: () => void;
}>({
    open: false,
    setOpen: () => {},
    toggleOpen: () => {},
});

const Dropdown = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }: PropsWithChildren) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>

            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black opacity-50"
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </>
    );
};

const Content = ({ align = 'left', contentClasses = 'py-1 bg-bnb-blue text-white', header, items }: PropsWithChildren<{ align?: 'left'|'right', contentClasses?: string, header: string, items: { text: string, href: string, icon: JSX.Element }[] }>) => {
    const { open, setOpen } = useContext(DropDownContext);

    let alignmentClasses = 'origin-top';

    if (align === 'left') {
        alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right left-0';
    } else if (align === 'right') {
        alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left right-0';
    }

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div
                    className={`fixed inset-y-0 w-1/2 ${alignmentClasses} z-50 bg-white ${contentClasses}`}
                    onClick={() => setOpen(false)}
                >
                    <div className="h-full flex flex-col">
                        <div className="-mt-1 py-4 px-6 bg-bnb-mat-blue text-white flex items-center justify-center h-28 text-xl font-bold">
                            <strong>{header}</strong>
                        </div>

                        <div className="-mb-1 flex-grow bg-bnb-blue p-4">
                            {items.map((item, index) => (
                                <Link key={index} href={item.href} className="flex items-center py-2 text-white hover:underline">
                                    <span className="mr-2 text-white">{item.icon}</span>
                                    <span className="text-white">{item.text}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Transition>
        </>
    );
};

const DropdownLink = ({ className = '', children, ...props }: InertiaLinkProps) => {
    return (
        <Link
            {...props}
            className={
                'block w-full px-4 py-2 text-start text-sm leading-5 text-white' +
                className
            }
        >
            {children}
        </Link>
    );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;

