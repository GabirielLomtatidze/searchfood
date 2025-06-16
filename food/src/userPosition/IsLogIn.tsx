import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from '../components/Header';
import Main from "../pages/Main";
import Profile from '../clerkSign/Porifile';

export default function IsLogIng() {

    return (
        <>
         <Header/> 
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
