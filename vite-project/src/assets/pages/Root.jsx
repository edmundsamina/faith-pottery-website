import { Outlet } from "react-router-dom";
import { Header } from "../components/header-footer/Header";

export function Root(){
    return (
        <div className="root-page-div">
        <Header/>            
        <Outlet/>
        <div>Footer</div>
        </div>
    )
}