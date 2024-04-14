import React, { useState, useEffect } from "react";

interface ToggleComponentProps {
    toggleFunc: () => void;
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({ toggleFunc }) => {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" id="ld-mode" defaultChecked={true} />
                <span className="slider round" onClick={toggleFunc} />
            </label>
        </div>
    );
};

const ToggleTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? (storedTheme === "dark") : true;
    });


    const SwitchTheme = (cls: string) => {
        const elements = document.getElementsByClassName(cls);
        const dark: string = `dark-${cls}`;
        const light: string = `light-${cls}`;
        for (let i = 0; i < elements.length; i++) {
            if (isDarkMode) {
                elements[i].classList.remove(dark);
                elements[i].classList.add(light);
            } else {
                elements[i].classList.remove(light);
                elements[i].classList.add(dark);
            }
        }
    };

    const initClass = (cls: string) => {
        const elements = document.getElementsByClassName(cls);
        const clsMode = (isDarkMode ? `dark-${cls}` : `light-${cls}`);
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add(clsMode);
        }
    };

    const SwitchFunc = () => {
        SwitchTheme("main");
        SwitchTheme("1");
        SwitchTheme("2");
        SwitchTheme("inverse");
        setIsDarkMode(prevIsDarkMode => {
            const newIsDarkMode = !prevIsDarkMode;
            localStorage.setItem('theme', newIsDarkMode ? 'dark' : 'light');
            return newIsDarkMode;
        });
    }


    const init = () => {
        const storedTheme = localStorage.getItem("theme");
        setIsDarkMode(storedTheme ? (storedTheme === "dark") : isDarkMode); // Update isDarkMode using setIsDarkMode
        initClass("main");
        initClass("1");
        initClass("2");
        initClass("inverse");
    }

    const ToggleFunc = () => {
        init();
        SwitchFunc();
    };

    useEffect(() => {
        init();
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div>
            <ToggleComponent toggleFunc={ToggleFunc} />
        </div>
    );
};

export default ToggleTheme;