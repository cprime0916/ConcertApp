import React, { useState, SVGProps } from "react";
import PlayButtonSVG from "../assets/PlayButton.svg";
import PauseButtonSVG from "../assets/PauseButton.svg";
import SkipBackwardButtonSVG from "../assets/SkipBackwardButton.svg";
import SkipForwardButtonSVG from "../assets/SkipForwardButton.svg";
import ShuffleButtonSVG from "../assets/ShuffleButton.svg";
import LoopButtonSVG from "../assets/LoopButton.svg";

interface PlaybarProps {
    AudioPath: string;
}

interface PlaybarButtonProps {
    x_coord: number;
    path: string;
}

const PlayButton: React.FC = () => {
    const [play, setPlay] = useState(false);
    const TogglePlay = () => {
        setPlay(!play);
    };
    const PlayButtonStyle: React.CSSProperties = {
        left: `46%`,
    };
    return (
        <div style={PlayButtonStyle} className="2 play-button-out">
            {play ? <PauseButtonSVG onClick={TogglePlay}/> : <PlayButtonSVG onClick={TogglePlay}/>}
        </div>
    );
};

const PlaybarButton: React.FC<PlaybarButtonProps> = ({ x_coord, path }) => {
    const ReturnIconAlias = (IconName: string) => {
        if (IconName == "SkipBackward") return SkipBackwardButtonSVG;
        else if (IconName == "SkipForward") return SkipForwardButtonSVG;
        else if (IconName == "Shuffle") return ShuffleButtonSVG;
        else if (IconName == "Loop") return LoopButtonSVG;
    };
    
    const ReturnFunctionAlias = (IconName: string) => {
        if (IconName == "SkipBackward") return SkipBack;
        else if (IconName == "SkipForward") return SkipFront;
        else if (IconName == "Shuffle") return Shuffle;
        else if (IconName == "Loop") return Loop;
    };
    const SkipBack = () => {
        return;
    };
    const SkipFront = () => {
        return;
    };
    const Shuffle = () => {
        return;
    };
    const Loop = () => {
        return;
    };
    const SVGComponent = ReturnIconAlias(path);
    const SVGFunction = ReturnFunctionAlias(path);
    const PlaybarButtonStyle: React.CSSProperties = {
        left: `${x_coord}%`,
    };
    return (
        <div style={PlaybarButtonStyle} className="2 play-button-out">
            {SVGComponent && <SVGComponent className="inverse playbar-button-svg" onClick={SVGFunction}/>}
        </div>
    );
};

const Playbar: React.FC<PlaybarProps> = ({ AudioPath }: { AudioPath: string }) => {
    return (
        <>
            <div className="2 bottom-div">
                <PlayButton />
                <PlaybarButton x_coord={38} path="SkipBackward" />
                <PlaybarButton x_coord={54} path="SkipForward" />
                <PlaybarButton x_coord={30} path="Shuffle" />
                <PlaybarButton x_coord={62} path="Loop" />
            </div>
        </>
    );
};

export default Playbar;