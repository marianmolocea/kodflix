import React from 'react'
import {Link} from 'react-router-dom'

export default function MenuLink({onClick, text, icon, url}) {
    return (
    <Link to={url} className="menu-item" onClick={onClick}>
        {icon} {text}
      </Link>
    )
}
