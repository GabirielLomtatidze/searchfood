import { UserProfile } from "@clerk/clerk-react"

export default function Profile() {

    return (
        <>
            <div style={{height: "100vh", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "#0D1B2A"}}>
                <UserProfile />
            </div>
        </>
    )
}