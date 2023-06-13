import { Outlet } from "react-router-dom";
import { Header } from "../components/header-footer/Header";
import { Footer } from "../components/header-footer/Footer";

export function Root(){
    return (
        <div className="root-page-div">
        <Header/>            
        <Outlet/>
        <Footer/>
        </div>
    )
}