import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { magic } from '../lib/magic';
import { UserContext } from '../lib/UserContext';
import { CallToAction, TextButton } from '@magiclabs/ui';

const Header = () => {
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    magic.user.logout().then(() => {
      setUser({ user: null });
      Router.push('/login');
    });
  };

  return (
    <>
      <nav className="flex h-9 items-center justify-between" aria-label="Global">
        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-8" height={50} width={50} src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
          {user?.loading ? (
            // If loading, don't display any buttons specific to the loggedIn state
            <div style={{ height: '38px' }}></div>
          ) : user?.issuer ? (
            <>
              <Link href='/'>
                <a className="font-semibold text-white-900 hover:text-white-900">Home</a>
              </Link>
              <Link href='/profile'>
                <a className="font-semibold text-white-900 hover:text-white-900">Profile</a>
              </Link>
              <Link href='/about'>
                <a href="#" className="font-semibold text-white-900 hover:text-white-900">About</a>
              </Link>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <TextButton color='warning' size='sm' className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white-900 shadow-sm ring-1 ring-white-900/10 hover:ring-white-900/20" onPress={logout}>
                  Logout
                </TextButton>
              </div>
            </>
          ) : (
            <Link href='/login'>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <CallToAction className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white-900 shadow-sm ring-1 ring-white-900/10 hover:ring-white-900/20">
                  Login
                </CallToAction>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
