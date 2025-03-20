import {useEffect, useState} from "react";

interface MenuTitleProps {
    menuSelected?: (menuName: string) => void,
}

function MenuTitle({menuSelected}: MenuTitleProps) {
    const [playAnimation, setPlayAnimation] = useState(false);

    let menuTitle;

    useEffect(() => {
        console.log("Use effect fired.")
        const timer = setTimeout(() => {
            // Code to be executed after 10ms
            console.log("playing animation.")
            setPlayAnimation(true);
        }, 10);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    let smallReveal = playAnimation ? " name-idan-reveal" : "";
    let bigReveal = playAnimation ? " name-raftzenk-reveal" : "";

    switch (menuSelected) {
        case "Home":
            menuTitle = (<span className="block m-8 fullname">
                    <span className="font-bold text-5xl">A</span>
                    <span className={"font-bold text-5xl" + smallReveal}>idan </span>
                    <span className="font-bold text-5xl">K</span>
                    <span className={"font-bold text-5xl" + bigReveal}>raftzenk</span>
                </span>);
            break;
        case "Projects":
            menuTitle = (<span className="block m-8 fullname">
                    <span className="font-bold text-5xl">P</span>
                    <span className={"font-bold text-5xl" + bigReveal}>rojects</span>
                </span>)
            break;
        case "Contact":
            menuTitle = (<span className="block m-8 fullname">
                    <span className="font-bold text-5xl">C</span>
                    <span className={"font-bold text-5xl" + bigReveal}>ontact</span>
                </span>)
            break;
    }

    return (<div>
            {menuTitle}
        </div>
    );
}

export default MenuTitle;