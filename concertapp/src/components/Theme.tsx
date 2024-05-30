import React, { useState, useEffect } from "react";

interface ToggleComponentProps {
    toggleFunc: () => void;
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({ toggleFunc }) => {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" id="ld-mode" defaultChecked={localStorage.getItem("theme") == "light"} aria-label="Theme Switch"/>
                <span className="slider round" onClick={toggleFunc} />
            </label>
        </div>
    );
};

const initClass = (cls: string, isDarkMode: boolean) => {
    const clsMode = isDarkMode ? `dark-${cls}` : `light-${cls}`;
    const container = document.getElementById('root');
  
    if (container) {
      const elements = Array.from(container.querySelectorAll('*')) as Element[];
      for (const element of elements) {
        if (element.classList.contains(cls)) {
          element.classList.add(clsMode);
        }
      }
    }
  }

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

    const SwitchFunc = () => {
        SwitchTheme("main");
        SwitchTheme("1");
        SwitchTheme("2");
        SwitchTheme("inverse");
        SwitchTheme("progress-bar");
        setIsDarkMode(prevIsDarkMode => {
            const newIsDarkMode = !prevIsDarkMode;
            localStorage.setItem("theme", newIsDarkMode ? "dark" : "light");
            return newIsDarkMode;
        });
    }


    const init = () => {
        const htmlElement = document.documentElement;
        const storedTheme = localStorage.getItem("theme");
        setIsDarkMode(storedTheme ? (storedTheme === "dark") : isDarkMode); // Update isDarkMode using setIsDarkMode
        initClass("main", isDarkMode);
        initClass("1", isDarkMode);
        initClass("2", isDarkMode);
        initClass("inverse", isDarkMode);
        initClass("progress-bar", isDarkMode);
        htmlElement.classList.add(isDarkMode ? `dark-1` : `light-1`);
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