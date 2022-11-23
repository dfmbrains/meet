import React, {useEffect, useRef, useState} from 'react';
import './home.scss';
import socket from "../../socket";
import ACTIONS from "../../socket/actions";
import {useNavigate} from "react-router";
import {v4} from "uuid";

const HomePage = () => {
    const navigate = useNavigate()
    const [rooms, setRooms] = useState([])
    const rootNode = useRef()

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) => {
            if (rootNode.current) {
                setRooms(rooms)
            }
        })
    }, [])
    return (
        <div ref={rootNode}>
            <h1>Доступные комнаты</h1>
            <ul>
                {rooms.map(roomID => (
                    <li key={roomID}>
                        {roomID}
                        <button onClick={() => navigate(`/rooms/${roomID}`)}>Присоединиться к комнате</button>
                    </li>
                ))}
            </ul>

            <button onClick={() => navigate(`/rooms/${v4()}`)}>Создать комнату</button>
        </div>
    );
};

export default HomePage;