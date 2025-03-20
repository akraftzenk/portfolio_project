interface PageSelectMenuProps {
    menuSelected?: (menuName: string) => void
}

const menuNames = ["Home", "Projects", "Contact"]

function PageSelectMenu({menuSelected}: PageSelectMenuProps) {
    function selectMenu(menuName: string) {
        menuSelected(menuName);
    }

    let buttons = [];

    for (let menuName of menuNames) {
        buttons.push((<button className="m-2" onClick={() => selectMenu(menuName)}>{menuName}</button>));
    }

    return (<div>
        {buttons}
    </div>);
}

export default PageSelectMenu;