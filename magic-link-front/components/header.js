import { useContext, useState } from 'react';
import Router from 'next/router';
import { magic } from '../lib/magic';
import { UserContext } from '../lib/UserContext';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [user, setUser] = useContext(UserContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  const logout = () => {
    magic.user.logout().then(() => {
      setUser({ user: null });
      Router.push('/login');
    });
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Profile', href: '/profile' },
    { name: 'About', href: '#' }
  ]

  return (
    <>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">

            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            {user?.loading ? (
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <a
                  className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  loading...
                </a>
              </div>
            ) : user?.issuer ? (
              <>
                <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                  <a
                    onClick={() => logout()}
                    className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Log out
                  </a>
                </div>
              </>
            ) : (
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <a
                  href='/login'
                  className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Log in
                </a>
              </div>
            )}
          </nav>

          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} >
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-black px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-white-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  {user?.loading ? (
                    <div className="py-6">
                      <a
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white hover:bg-white-400/10"
                      >
                        Loading... 
                      </a>
                    </div>
                  ) : user?.issuer ? (
                    <div className="py-6">
                      <a
                        href="/login"
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white hover:bg-gray-400/10"
                      >
                        Log in
                      </a>
                    </div>
                  ) : (
                    <div className="py-6">
                      <a
                        onClick={() => logout()}
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                      >
                        Log out
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Header;
