import React from "react";
import { Link } from "react-router-dom";
interface PieceProps {
    title: string;
    path: string;
}
const Piece: React.FC<PieceProps> = ({ title, path }: { title: string, path: string }) => {
    return (
        <>
            <Link to={`/piece/${path}`}>
                {title}
            </Link>
        </>
    );
};

export default Piece;