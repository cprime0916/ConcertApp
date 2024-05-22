import React, { useState, useEffect, useRef } from "react";
import PlayButtonSVG from "../assets/PlayButton.svg";
import PauseButtonSVG from "../assets/PauseButton.svg";
import SkipBackwardButtonSVG from "../assets/SkipBackwardButton.svg";
import SkipForwardButtonSVG from "../assets/SkipForwardButton.svg";
import ShuffleButtonSVG from "../assets/ShuffleButton.svg";
import LoopButtonSVG from "../assets/LoopButton.svg";
import TestAudio from "../assets/TestAudio.mp3";
import TestAudio2 from "../assets/TestAudio2.mp3";
import TestAudio3 from "../assets/TestAudio3.mp3";

const AudioArray = [TestAudio, TestAudio2, TestAudio3];

interface PlaybarProps {
    AudioPath?: string;
}

interface PlaybarButtonProps {
    x_coord: number;
    path: string;
    onClick?: () => void;
}

const ProgressBar: React.FC<{ audioRef: React.RefObject<HTMLAudioElement> }> = ({ audioRef }) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const onTimeUpdate = () => {
            if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
            }
        };

        const onLoadedMetadata = () => {
            if (audioRef.current) {
                setDuration(audioRef.current.duration);
            }
        };

        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', onTimeUpdate);
            audioRef.current.addEventListener('loadedmetadata', onLoadedMetadata);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', onTimeUpdate);
                audioRef.current.removeEventListener('loadedmetadata', onLoadedMetadata);
            }
        };
    }, []);

    const onScrub = (value: number) => {
        setCurrentTime(value);
        if (audioRef.current) {
            audioRef.current.currentTime = value;
        }
    };

    // Function to format time in MM:SS
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const ProgressContainerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        left: '10%',
        width: '80%',
    };

    const TimeStyle: React.CSSProperties = {
        fontSize: '20px',
    };

    const ProgressBarStyle: React.CSSProperties = {
        position: 'absolute',
        left: '15%',
        width: '70%',
    };

    return (
        <div className="2 progress-bar-out">
            <div style={TimeStyle}>{formatTime(currentTime)}</div>
            <div style={ProgressContainerStyle}>
                <input style={ProgressBarStyle}
                    type="range"
                    value={currentTime}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="progress-bar"
                    onChange={(e) => onScrub(Number(e.target.value))}
                    aria-label="Audio Progress Bar"
                />
            </div>
            <div style={TimeStyle}>{formatTime(duration)}</div>
        </div>
    );
};

const PlayButton: React.FC<{ audioRef: React.RefObject<HTMLAudioElement>, src: string, loop: boolean, handleAudioEnd: () => void }> = ({ audioRef, src, loop, handleAudioEnd }) => {
    const [play, setPlay] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = src;
            if (play) {
                audioRef.current.play();
            }
        }
    }, [src]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.loop = loop;
        }
    }, [loop]);

    useEffect(() => {
        if (play) {
            if (audioRef.current) {
                audioRef.current.play();
            }
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        }
    }, [play]);

    // Add event listener for the 'ended' event
    useEffect(() => {
        const onAudioEnd = () => {
            handleAudioEnd();
            setPlay(false); // Set play to false when audio ends
        };

        if (audioRef.current) {
            audioRef.current.addEventListener('ended', onAudioEnd);
        }

        // Clean up the event listener when the component is unmounted
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('ended', onAudioEnd);
            }
        };
    }, []);

    const TogglePlay = () => {
        if (!play) {
            if (audioRef.current && audioRef.current.ended && !loop) {
                handleAudioEnd();
            } else {
                if (audioRef.current) {
                    audioRef.current.play();
                }
            }
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        }
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

const PlaybarButton: React.FC<PlaybarButtonProps> = ({ x_coord, path, onClick }) => {
    const ReturnIconAlias = (IconName: string) => {
        if (IconName == "SkipBackward") return SkipBackwardButtonSVG;
        else if (IconName == "SkipForward") return SkipForwardButtonSVG;
        else if (IconName == "Shuffle") return ShuffleButtonSVG;
        else if (IconName == "Loop") return LoopButtonSVG;
    };

    const SVGComponent = ReturnIconAlias(path);
    const PlaybarButtonStyle: React.CSSProperties = {
        left: `${x_coord}%`,
    };

    return (
        <div style={PlaybarButtonStyle} className="2 play-button-out">
            {SVGComponent && <SVGComponent className="inverse playbar-button-svg" onClick={onClick}/>}
        </div>
    );
};

const Playbar: React.FC<PlaybarProps> = () => {
    const audioRef = useRef(new Audio());
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loop, setLoop] = useState(false);

    const handleAudioEnd = () => {
        if (currentIndex < AudioArray.length - 1) {
            setCurrentIndex(oldIndex => oldIndex + 1);
        }
    };

    const SkipBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(oldIndex => oldIndex - 1);
            setLoop(false); // disable loop mode
        }
        if (audioRef.current) {
            audioRef.current.play();
        }
    };
    
    const SkipFront = () => {
        if (currentIndex < AudioArray.length - 1) {
            setCurrentIndex(oldIndex => oldIndex + 1);
            setLoop(false); // disable loop mode
        }
        if (audioRef.current) {
            audioRef.current.play();
        }
    };
    
    const Shuffle = () => {
        const randomIndex = Math.floor(Math.random() * AudioArray.length);
        setCurrentIndex(randomIndex);
        setLoop(false); // disable loop mode
        if (audioRef.current) {
            audioRef.current.play();
        }
    };    

    const Loop = () => {
        setLoop(!loop);
    };

    return (
        <>
            <div className="2 bottom-div">
                <ProgressBar audioRef={audioRef} />
                <PlayButton audioRef={audioRef} src={AudioArray[currentIndex]} loop={loop} handleAudioEnd={handleAudioEnd} />
                <PlaybarButton x_coord={38} path="SkipBackward" onClick={SkipBack} />
                <PlaybarButton x_coord={54} path="SkipForward" onClick={SkipFront} />
                <PlaybarButton x_coord={30} path="Shuffle" onClick={Shuffle} />
                <PlaybarButton x_coord={62} path="Loop" onClick={Loop} />
            </div>
        </>
    );
};

export default Playbar;