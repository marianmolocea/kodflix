import React, {useState} from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import VerticalMenu from './Menu/VerticalMenu/VerticalMenu';
import './NavBar.css'

export default function NavBar() {

    let [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className="NavBar">
                <Logo />
                <Menu onClick={toggleMenu}/>
            </div>
            <VerticalMenu onClick={toggleMenu} isOpen={isOpen} closeMenu={closeMenu}/>
        </>
    )
}
