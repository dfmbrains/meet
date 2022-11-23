import React from "react";
import './style.scss';
import {Route, Routes} from "react-router";
import HomePage from "./pages/Home";
import RoomPage from "./pages/Room";

function App() {
    return (
        <main>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/rooms/:id"} element={<RoomPage/>}/>
            </Routes>
        </main>
    );
}

export default App;
