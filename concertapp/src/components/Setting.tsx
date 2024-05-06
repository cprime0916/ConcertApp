import React, { useRef, useState, useEffect } from "react";
import SettingDSvg from "../assets/SettingDark.svg";
import SettingLSvg from "../assets/SettingLight.svg";
{ /* This is just a temporary approach to the setting components (especially options), each option top px = prev option + 15. */ }
interface TribarProps {
    options?: string[];
}
const Tribar: React.FC<TribarProps> = () => {
    const tribarRef = useRef<HTMLDivElement>(null);
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const ToggleFunc = () => {
        if (tribarRef.current) {
            const TribarDiv = tribarRef.current;
            if (TribarDiv.style.display === "none") {
                TribarDiv.style.display = "block";
            } else {
                TribarDiv.style.display = "none";
            }
        }
    };
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme); // Update state based on localStorage value
        }
    }, [localStorage.getItem("theme")]);
    return (
        <>
            {theme === "dark" ? <SettingDSvg className="setting" onClick={ToggleFunc} /> : <SettingLSvg className="setting" onClick={ToggleFunc} /> }
            <div ref={tribarRef} style={{ display: "none" as const }} className="2 options">
                Hello, World!
            </div>

            {/* TODO: construct tribar component (base component of Setting */}
        </>
    );
};
const Setting: React.FC = () => {
    return (
        <>
            <Tribar />
            { /* TODO: make settings component */ }
        </>
    );
};
{/* className="inverse" */ }
export default Setting;