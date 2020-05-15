import React from 'react'
import './Menu.css'
import {FiMenu} from 'react-icons/fi'

export default function Menu({onClick}) {
    return (
        <button className="Menu" onClick={onClick}>
            <FiMenu />
        </button>
    )
}
