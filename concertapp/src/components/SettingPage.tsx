import React, { useState } from "react";
import init from "./Theme";
import ToggleTheme from "./Theme";

const SettingGeneral: React.FC = () => {
    const [volume, setVolume] = useState<number>(() => {
        const storedVolume = localStorage.getItem('volume');
        return storedVolume ? parseInt(storedVolume, 10) : 50;
    });
    
    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(event.target.value, 10);
        setVolume(newVolume);
        localStorage.setItem('volume', newVolume.toString()); // Save to localStorage
    };

    return (
        <div className="settings-content-out">
            <div className="settings-content">
                <div style={{ top: '5%', height: '10%', alignItems: 'center', display: "flex" }}>
                    <p style={{ margin: '0cm' }}>Audio Volume: {volume}</p>
                </div>
            </div>
            <div className="settings-config">
                <input  type="range"
                        step="1"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="progress-bar"
                        aria-label="Audio Volume Config Bar"
                        style={{ top: '5%', height: '10%' }}
                />
        </div>
    </div>
  );
};

const SettingTheme: React.FC = () => {
    return (
        <div className="2 settings-content-out">
            <div className="2 settings-content">
                <div style={{ top: "5%", height: "10%", alignItems: 'center', display: "flex" }}>
                    <p style={{ margin: "0cm" }}>Light Mode:</p>
                </div>
            </div>
            <div className="2 settings-config">
                <div style={{ top: "5%", height: "10%" }}>
                    <ToggleTheme />
                </div>
            </div>
        </div>
    );
};

const SettingPage: React.FC = () => {
    init();
    const [activeSetting, setActiveSetting] = useState("general");

    const handleButtonClick = (setting: string) => {
        setActiveSetting(setting);
    };

    return (
        <>
            { /* TODO: Add SettingPage component here */ }
            <div className="1 x-container">
                <h1>Settings</h1>
            </div>
            <div className="2 container settings-window">
                <div className="2 settings-list">
                    <button className="2 settings-button" onClick={() => handleButtonClick("general")} style={{top: "0%", borderTopLeftRadius: "20% 60%"}}>General</button>
                    <button className="2 settings-button" onClick={() => handleButtonClick("theme")} style={{top: "10%"}}>Theme</button>
                    {/* TODO: Add pages of setting options */}
                </div>
                {activeSetting === "general" && <SettingGeneral />}
                {activeSetting === "theme" && <SettingTheme />}
                {/* TODO: Add elem/component for showing settings options */}
            </div>
        </>
    );
};

export default SettingPage;