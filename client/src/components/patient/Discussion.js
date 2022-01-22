import React, { useState, useEffect, useRef } from 'react'
import { db } from '../../firebase'
import SendRoomMessages from './SendRoomMessages';
import { useNavigate } from "react-router-dom";
import './Discussion.css'

export default function Discussion() {

    let navigate = useNavigate();
    const scroll = useRef()
    const [messages, setMessages] = useState([])

    const [profile, setProfile] = useState([])

    // Function to get user datas
    async function getUser() {
        const response = await fetch(`http://localhost:5000/api/auth/getUser`, {
            method: "GET",
            headers: {
                "auth-token": localStorage.getItem("token"),
            },

        })
        const data = await response.json();
        setProfile(data);

    }


    useEffect(() => {

        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
        getUser()
        // To get message state
        db.collection('messages').orderBy('createdAt').limit(80).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))

        })
    // eslint-disable-next-line
    }, []);

    return (

        <div>
            <div className="msgs">
                {messages.map(({ name, text, email }) => {
                    return (
                        <div>
                            <div key={email} className={`msg ${email === profile.email ? 'sent' : 'received'}`}>
                                {name}
                                <p>{text}</p>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <SendRoomMessages scroll={scroll} />
            <div ref={scroll}></div>

        </div>
    )
}


