import React from "react";
import Playlist from "./Playlist";
import ToggleTheme from "./Theme";
import Playbar from "./Playbar";
const Home: React.FC = () => {
    return (
        <div className="1">
            <div className="1 top-div">
                <ToggleTheme />
                <>{/* TODO: construct upper div */}</>
            </div>
            <div className="1 left-div-out">
                {/* Playlists div*/}
                <div className="2 left-div-in">
                    <Playlist title="Foo" path="foo" />
                    <Playlist title="Bar" path="bar" />
                </div>
            </div>
            <div className="1">
                <div className="main main-frame">
                    <div className="main main-in">
                        {/* Main Contents */}
                    </div>
                </div>
            </div>
            <div className="2 bottom-div">
                <Playbar AudioPath="test" />
            </div>
        </div>

    );
};
export default Home;