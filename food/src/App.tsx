import { SignedIn, SignedOut, UserButton, } from '@clerk/clerk-react';
import Welcome from './pages/Welcome';

export default function App() {


  return (
    <header>
      <SignedOut>
        <Welcome />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}