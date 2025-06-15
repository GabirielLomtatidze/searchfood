import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from '../components/Header';
import Welcome from "../pages/Welcome";
import SignUp from '../clerkSign/SignUp';
import SignedIn from '../clerkSign/SignIn';

export default function NotLogIn() {

    return (
        <>
            <Header/> 
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/sign-in' element={<SignedIn />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}