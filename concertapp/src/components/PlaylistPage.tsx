import React from "react";
interface PlaylistProps{
    title: string;
}
const PlaylistPage: React.FC<PlaylistProps> = ({title}: {title: string}) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
};
export default PlaylistPage;