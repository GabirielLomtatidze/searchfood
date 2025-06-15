import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Welcome from "../pages/Welcome"

export default function NotLogIn() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Welcome />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}