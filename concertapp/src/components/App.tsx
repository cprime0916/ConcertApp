import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import PlaylistPage from "./PlaylistPage";
const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/playlist/:playlistName" element={<PlaylistPage/>} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};
export default App;
