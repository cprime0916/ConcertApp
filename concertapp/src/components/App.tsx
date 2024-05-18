import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import PlaylistPage from "./PlaylistPage";
import SettingPage from "./SettingPage";
const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/playlist/:playlistName" element={<PlaylistPage/>} />
                <Route path="*" element={<Error />} />
                <Route path="/settings" element={<SettingPage />} />
            </Routes>
        </>
    );
};
export default App;
