import React, {useState} from 'react'
import './Login.css'
import { Redirect } from 'react-router-dom'

export default function Login() {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [redirect, setRedirect] = useState(false)

    const checkLogin = () => {
        return username === "admin" && password === "admin" ?
            setRedirect(true) :
            alert('Incorrect user or password')
    }
    return (
        <div className="Login">
            <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            />
            <button className="button" onClick={() => checkLogin()}>Login</button>
            
            { redirect && <Redirect to="/manage/tv-shows" /> }
        </div>
    )
}
