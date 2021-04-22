/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '#about', current: false },
    { name: 'Works', href: '#works', current: false },
    { name: 'Services', href: '#services', current: false },
    { name: 'Contact Us', href: 'contact-us', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white-900">
            {({ open }) => (
                <>
                    <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-secondary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-5 w-auto"
                                        src="./images/logo.svg"
                                        alt="logo"
                                    />
                                    <img
                                        className="hidden lg:block h-5 w-auto"
                                        src="./images/logo.svg"
                                        alt="logo"
                                    />
                                </div>
                                <div className="hidden sm:block mx-auto">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? ' text-primary font-bold' : 'text-gray-300 hover:bg-gray-700 hover:text-secondary',
                                                    'px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/*<button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">*/}
                                {/*    <span className="sr-only">View notifications</span>*/}
                                {/*    <BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                                {/*</button>*/}

                                <button className="text-primary-900 font-medium border-2 border-primary-900 px-6 py-2 text-sm rounded-full mr-6 whitespace-nowrap">
                                    SIGN IN
                                </button>

                                <button className="text-white font-medium border-2 border-primary-900  bg-primary-900 px-4 py-2 text-sm rounded-full shadow-xl	 whitespace-nowrap">
                                    GET FREE QUOTE
                                </button>

                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
