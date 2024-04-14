import React from "react";
import { Link } from "react-router-dom";
interface PlaylistProps {
    title: string;
    path: string;
}
const Playlist: React.FC<PlaylistProps> = ({ title, path }: { title: string, path: string }) => {
    return (
        <>
            <Link to={`/playlist/${path}`} className="1 playlist">
                {title}
            </Link>
        </>
    );
}

export default Playlist;
