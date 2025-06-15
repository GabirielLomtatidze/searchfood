


export default function Welcome() {

    return (
        <>
            <div className="welcome_body">
                <div className="welcome_left_side">
                    <h2 className="welcome_title">Hey Food Lover, Welcome! <span className="hand_shake">👋</span></h2>
                    <p className="welcome_text">Whip up something delicious with our easy, tasty recipes made for every craving.</p>
                    <div className="line"></div>
                    <p className="welcome_text">From quick bites to hearty meals, our collection has something for everyone. Dive in and discover your next favorite dish!</p>
                </div>
                <div className="welcome_right_side">
                    <div className="auth_border">
                        <p className="auth_text">Welcome! Sign up or sign in to continue.</p>
                        <a href="/sign-up"><button className="sign_button">Sign Up</button></a>
                        <a href="/sign-in"><button className="sign_button">Sign In</button></a>
                    </div>
                </div>
            </div>
        </>
    )
} 