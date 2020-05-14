import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import './NavBar.css'

export default function NavBar() {
    return (
        <div className="NavBar">
            <Logo />
            <Menu />
        </div>
    )
}
