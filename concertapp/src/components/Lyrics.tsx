import React, { useRef } from "react";
import readFile from "fs";
import { parser, Cue, Format } from "simple-subtitle-parser";
const Lyrics: React.FC = () => {
    const [lyricsRef, useLyricsRef] = useRef<boolean>(false);
    return (
        <>
            // TODO: Lyrics component
        </>
    );
};
export default Lyrics;