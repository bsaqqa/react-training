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
        <Disclosure as="nav" className="bg-white-900 z-10 fixed top-0 left-0 right-0 filter blur-lg">
            {({ open }) => (
                <>
                    <div className="max-w-6xl mx-auto px-2 md:px-4 lg:px-6">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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
                            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
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
                                <div className="hidden md:block mx-auto">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? ' text-primary font-bold' : 'text-black-300  hover:text-secondary',
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
                            <div className=" flex items-center pr-2 hidden sm:block md:ml-4 lg:ml-6 sm:pr-0">

                                <button className="text-primary-900 font-medium border-2 border-primary-900 px-3 lg:px-6 py-2 mr-2 lg:mr-6 text-sm rounded-full whitespace-nowrap focus:outline-none hover:bg-primary-900 hover:text-white  transition delay-300">
                                    SIGN IN
                                </button>

                                <button className="text-white font-medium border-2 border-primary-900  bg-primary-900 px-2 lg:px-4 py-2 text-sm rounded-full shadow-xl whitespace-nowrap focus:outline-none hover:bg-secondary hover:text-primary-900 hover:border-secondary transition delay-300">
                                    GET FREE QUOTE
                                </button>

                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden shadow-xl pb-4">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                    item.current ? 'text-primary font-bold' : 'text-black-300  hover:text-secondary',
                                    'block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className=" flex flex-col  pr-2 sm:hidden ">
                                <button className="text-primary-900 font-medium border-2 border-primary-900 px-3 py-2 mb-2 lg:mr-6 text-sm rounded-full whitespace-nowrap focus:outline-none hover:bg-primary-900 hover:text-white  transition delay-300">
                                    SIGN IN
                                </button>
                                <button className="text-white font-medium border-2 border-primary-900  bg-primary-900 px-2 py-2 text-sm rounded-full  whitespace-nowrap focus:outline-none hover:bg-secondary hover:text-primary-900 hover:border-secondary transition delay-300">
                                    GET FREE QUOTE
                                </button>

                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
