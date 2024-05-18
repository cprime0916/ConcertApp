import React from "react";
import Playlist from "./Playlist";
import ToggleTheme from "./Theme";
import Playbar from "./Playbar";
import Setting from "./Setting";
const Home: React.FC = () => {
    return (
        <div>
            <div className="1 top-div">
                <ToggleTheme />
                <Setting />
                <>{/* TODO: construct upper div */}</>
            </div>
            <div className="1 left-div-out">
                {/* Playlists div*/}
                <div className="2 left-div-in">
                    <Playlist title="Foo" path="foo" />
                    <Playlist title="Bar" path="bar" />
                </div>
            </div>
            <div className="main main-frame">
                <div className="main main-in">
                    {/* Main Contents */}
                </div>
            </div>
            <Playbar AudioPath="test" />
        </div>

    );
};
export default Home;