import React, { useRef } from "react";
import TribarSVG from "../assets/Tribar.svg";
{ /* each option top px = prev option + 15. */ }
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
        <>
            <div ref={optionRef} style={{ display: "none" as const }}>
                {text}
            </div>
        </>
    )
};
interface TribarProps {
    options?: string[];
}
const Tribar: React.FC<TribarProps> = () => {
    const tribarRef = useRef<HTMLDivElement>(null);
    const goodbyeWorldRef = useRef<HTMLDivElement>(null);
    const ToggleFunc = () => {
        optionToggleFunc(tribarRef);
        optionToggleFunc(goodbyeWorldRef);
        { /* TODO: Add all ur Option component functions here */ }
    };
    return (
        <>
            <TribarSVG className="inverse setting" onClick={ToggleFunc} />
            <ul className="2 options">
                <li><Option text="Hello, World!" optionRef={tribarRef} /></li>
                <li><Option text="Goodbye, World!" optionRef={goodbyeWorldRef} /></li>
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