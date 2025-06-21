import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Main from "../pages/Main";
import Profile from '../clerkSign/Porifile';
import Details from '../pages/Details';
import Wishlist from '../pages/Wishlist';


export default function IsLogIng() {

   

    return (
        <>
         <Header/> 
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/wishlist' element={<Wishlist/>}/>
                    <Route path='/details/:id' element={<Details/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
