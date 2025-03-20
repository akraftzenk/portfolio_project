//import { useState } from 'react'
import './App.css'
import PageSelectMenu from "./components/PageSelectMenu.tsx";
import {useState} from "react";
import Home from "./components/Home.tsx";
import MenuTitle from "./components/MenuTitle.tsx";
import Projects from "./components/Projects.tsx";

function App() {
    const [menu, setMenu] = useState("Home")

    let menuComponent;

    switch (menu) {
        case "Home":
            menuComponent = <Home/>
            break;
        case "Projects":
            menuComponent = <Projects/>
            break;
    }

    function selectMenu(menuName: string) {
        setMenu(menuName);
    }

    return (
        <>
            <MenuTitle menuSelected={menu} />
            <PageSelectMenu selectMenu={selectMenu} selectedMenu={menu} />
            <span className="page-contents">
                {menuComponent}
            </span>
        </>
  )
}

export default App
