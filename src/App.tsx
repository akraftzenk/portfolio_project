//import { useState } from 'react'
import './App.css'
import PageSelectMenu from "./components/PageSelectMenu.tsx";
import {useState} from "react";
import Home from "./components/Home.tsx";

function App() {
    const [menu, setMenu] = useState("Home")

    let menuComponent;

    switch (menu) {
        case "Home":
            menuComponent = <Home/>
            break;
    }

    function menuSelected(menuName: string) {
        setMenu(menuName);
    }

    return (
        <>
            <PageSelectMenu menuSelected={menuSelected}/>
            {menuComponent}
        </>
  )
}

export default App
