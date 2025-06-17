import { useState } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, } from '@fortawesome/free-solid-svg-icons';
import Profile from '../clerkSign/Porifile';



export default function () {

    const { user } = useUser();

    const [openNavBar, setOpenNavBar] = useState<boolean>(false)

    const clickNavBar = () => {
        setOpenNavBar(!openNavBar);
    };

    const { signOut } = useClerk();


    return (
        <>
            <header>
                <FontAwesomeIcon icon={faBars} onClick={clickNavBar} className='navbar_icon' />
                <div className='navbar' style={{ display: openNavBar ? "block" : "none" }}>
                    <ul className="header_ul">
                        <a href="/"><li className="header_li">Home</li></a>
                        <a href="#"><li className="header_li">Recipes</li></a>
                        <a href="#"><li className="header_li">Add Recipe</li></a>
                        <a href="#"><li className="header_li">Saved Recipes</li></a>
                        {
                            user ?
                                <>
                                    <a href="/Profile"><li className="header_li">Profile</li></a>
                                    <button onClick={() => signOut()} className='signOut'>Sign Out</button>
                                </>
                                : " "
                        }
                    </ul>
                </div>
                <nav>
                    <ul className="header_ul">
                        <a href="/"><li className="header_li">Home</li></a>
                        <a href="#"><li className="header_li">Recipes</li></a>
                        <a href="#"><li className="header_li">Add Recipe</li></a>
                        <a href="#"><li className="header_li">Saved Recipes</li></a>
                        {
                            user ?
                                <>
                                    <a href="/Profile"><li className="header_li">Profile</li></a>
                                </>
                                : " "
                        }

                    </ul>
                    <button onClick={() => signOut()} className='signOut'>Sign Out</button>
                </nav>
            </header>
        </>
    )
}