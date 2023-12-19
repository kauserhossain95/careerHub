import { Outlet } from "react-router-dom"
import { NavBar } from "../navBar/NavBar"
import { Footer } from "../footer/Footer"


export const Root = () => {
    return (
        <>
            <div className="w-4/5 mx-auto">
                <NavBar></NavBar>
                <Outlet></Outlet>
                
            </div>
            <Footer></Footer>
        </>
    )
}
