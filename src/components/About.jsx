import { Outlet } from "react-router-dom"
function About(){

    return (
        <div>
            <p>About</p>
            <Outlet />
        </div>
    )
}

export default About