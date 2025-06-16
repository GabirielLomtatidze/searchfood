import { useUser } from '@clerk/clerk-react';

// yicodo9176@nab4.com

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