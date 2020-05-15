import React from 'react'
import './VerticalMenu.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function VerticalMenu({onClick, isOpen}) {

    return (
        <div className={`VerticalMenu ${isOpen && 'active'}`}>
            <button className="close" onClick={onClick}><AiOutlineCloseCircle /></button>
            <div className="menu-item">HOME</div>
            <div className="menu-item">CATEGORIES</div>
            <div className="menu-item">YOUR SHOWS</div>
            <div className="menu-item">ADMIN</div>
        </div>
    )
}
