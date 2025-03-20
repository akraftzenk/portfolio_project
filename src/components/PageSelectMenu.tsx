interface PageSelectMenuProps {
    selectMenu: (menuName: string) => void,
    selectedMenu: string,
}

const menuNames = ["Home", "Projects", "Contact"]

function PageSelectMenu({selectMenu, selectedMenu}: PageSelectMenuProps) {
    function _selectMenu(menuName: string) {
        selectMenu(menuName);
    }

    let buttons = [];

    for (const menuName of menuNames) {
        //buttons.push((<button className="m-2" onClick={() => selectMenu(menuName)}>{menuName}</button>));
        if (menuName == selectedMenu) {
            buttons.push((<a
                className="menu-button px-4 py-2 border-b-4 border-black text-white bg-black" onClick={() => _selectMenu(menuName)}>{menuName}</a>));
        } else {
            buttons.push((<a
                className="menu-button px-4 py-2 border-b-4 border-black text-black hover:text-white hover:bg-black transition-all duration-200" onClick={() => _selectMenu(menuName)}>{menuName}</a>));
        }

    }

    return (<span className="page-select-menu m-8">
        {buttons}
    </span>);
}

export default PageSelectMenu;