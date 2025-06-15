import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';
import Welcome from './pages/Welcome';
import Header from './components/Header';

import IsLogIng from './userPosition/IsLogIn';
import NotLogIn from './userPosition/NotLogIn';

export default function App() {


  const {user} = useUser();

  

  return (
    <>
    {user ? <IsLogIng/> : <NotLogIn/> }
    </>
  );
}