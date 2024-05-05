import React from "react";
import SettingSVG from "../assets/Setting.svg";
interface TribarProps {
    options: string[];
    DivName: string;
}
const Tribar: React.FC<TribarProps> = ({ options }: { options: string[] }) => {
    const ToggleFunc = () => {
        {/* TODO: Construct toggle function */ }
    };
    return (
        <>
            {/* TODO: construct tribar component (base component of Setting */}
        </>
    );
};
const Setting: React.FC = () => {
    return (
        <>
            ( localStorage.getItem("theme") === 'dark' ? <SettingSVG className="dark-inverse" /> : <SettingSVG className="light-inverse" />)
            { /* TODO: make settings component */ }
        </>
    );
};
export default Setting;