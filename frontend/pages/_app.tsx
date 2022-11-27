import '../styles/globals.css'
import '../layouts/InternalLayout'
import type { AppProps } from 'next/app'
import InternalLayout from '../layouts/InternalLayout'
import { magic } from '../lib/magic'
import { UserContext } from '../lib/UserContext'
import { ThemeProvider } from '@magiclabs/ui';
import '@magiclabs/ui/dist/cjs/index.css';
import { useEffect, useState } from 'react';
import Router from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

  const [user, setUser] = useState<any>(null);

  // If isLoggedIn is true, set the UserContext with user data
  // Otherwise, redirect to /login and set UserContext to { user: null }
  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then((isLoggedIn: any) => {
      if (isLoggedIn) {
        magic.user.getMetadata().then((userData: any) => setUser(userData));
      } else {
        Router.push('/login');
        setUser({ user: null });
      }
    });
  }, []);

  return (
    <ThemeProvider root>
      <UserContext.Provider value={[user, setUser]}>
        <InternalLayout>
          <Component {...pageProps} />
        </InternalLayout>
      </UserContext.Provider>
    </ThemeProvider>
  )
}
