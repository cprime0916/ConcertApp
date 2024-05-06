import React, { useState } from "react";
interface PlaybarProps {
    AudioPath?: string;
}

const PlayButton: React.FC = () => {
    const [play, setPlay] = useState(false);
    const playchar = (play ? "⏸" : "⏵");
    const TogglePlay = () => {
        setPlay(!play);
    };
    return (
        <div className="2 play-button-out">
            <button className="1 play-button" onClick={TogglePlay}>{playchar}</button>
        </div>
    );
};

const Playbar: React.FC<PlaybarProps> = () => {
    return (
        <>
            <div className="1 play-bar">
                <PlayButton />
                <button className="1 play-bar-button-left" style={{ left: '42%', width: '4%', zIndex: '107', borderRadius: '40% 0 0 40%' }}>🔀</button>
                { /* <button className="1 play-bar-button-left" style={{ left: '42%', width: '4%', zIndex: '107', borderRadius: '40% 0 0 40%' }}><img src="../assets/ShuffleIconDark.svg" style={{ width: '40px', height: '40px' }} className="img"></img></button> */}
                <button className="1 play-bar-button-left" style={{ left: '45%', width: '3%', zIndex: '108', borderRadius: '50% 0 0 50%' }}>⏮</button>
                <button className="1 play-bar-button-right" style={{ left: '52%', width: '3%', zIndex: '108', borderRadius: '0 50% 50% 0' }}>⏭</button>
                <button className="1 play-bar-button-right" style={{ left: '54%', width: '4%', zIndex: '107', borderRadius: '0 40% 40% 0' }}>⏭</button>
            </div>
        </>
    );
};

export default Playbar;