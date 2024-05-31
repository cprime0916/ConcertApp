import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TribarSVG from "../assets/Tribar.svg";
interface OptionProps {
    text: string;
    optionRef: React.RefObject<HTMLDivElement>;
    useFunc?: () => void;
}
const optionToggleFunc = (optionRef: React.RefObject<HTMLDivElement>) => {
    if (optionRef.current) {
        const optionDiv = optionRef.current;
        if (optionDiv.style.display === "none") {
            optionDiv.style.display = "block";
        } else {
            optionDiv.style.display = "none";
        }
    }
};
const Option: React.FC<OptionProps> = ({ text, optionRef }: { text: string, optionRef: React.RefObject<HTMLDivElement> }) => {
    return (
        <Link to="/settings" className="1" style={{ textDecoration: "none" }}>
            <div ref={optionRef} style={{ display: "none" as const }}>
                {text}
            </div>
        </Link>
    )
};
interface TribarProps {
    options?: string[];
}
const Tribar: React.FC<TribarProps> = () => {
    const generalRef = useRef<HTMLDivElement>(null);
    const themeRef = useRef<HTMLDivElement>(null);
    const ToggleFunc = () => {
        optionToggleFunc(generalRef);
        optionToggleFunc(themeRef);
        { /* TODO: Add all ur Option component functions here */ }
    };
    return (
        <>
            <TribarSVG className="inverse setting" onClick={ToggleFunc} />
            <ul className="2 options">
		{/* placeholders for elements in Tribar component  */}
                <li><Option text="General" optionRef={generalRef} /></li>
                <li><Option text="Theme" optionRef={themeRef} /></li>
            </ul>
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
export default Setting;
