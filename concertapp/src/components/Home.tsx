import React from "react";
import Playlist from "./Playlist";
import ToggleTheme from "./Theme";
const Home: React.FC = () => {
    return (
        <div>
            {/* <h1>nigger</h1> */}
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
            <div className="1 main-out-1">
                <div className="main main-out-2">
                    <>{/* TODO: construct main stuff */}</>
                </div>
            </div>
        </div>

    );
};
export default Home;