import React from "react";
import { useParams } from "react-router-dom";
import TSLogo from "../assets/TSLogo.svg";
const PlaylistPage: React.FC = () => {
    const { playlistName } = useParams();
    return (
        <div>
            <TSLogo />
            <h1>{playlistName}</h1>
        </div>
    )
};
export default PlaylistPage;