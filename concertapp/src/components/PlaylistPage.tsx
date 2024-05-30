import React from "react";
import { useParams } from "react-router-dom";
import TSLogo from "../assets/TSLogo.svg";
import Error from "./Error";
import init from "./Theme";
const namesArray = ["Foo", "Bar"];
const playlistNameFmt = (s: string) => {
    s = s[0].toUpperCase() + s.slice(1);
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '_' && i + 1 < s.length) {
            s = s.slice(0, i) + ' ' + s[i + 1].toUpperCase() + s.slice(i + 2);
        }
    }
    return s;
};
const PlaylistPage: React.FC = () => {
    init();
    const { playlistName } = useParams();
    const refmtName = playlistNameFmt(playlistName!);
    if (!namesArray.includes(refmtName)) {
        return <Error />;
    }
    return (
        <div className="1">
            <TSLogo />
            <h1>{refmtName}</h1>
        </div>
    )
};
export default PlaylistPage;