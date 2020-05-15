import React from 'react';
import MenuLink from './MenuLink/MenuLink';
import './VerticalMenu.css';
import { AiOutlineCloseCircle, AiOutlineHome } from 'react-icons/ai';
import { FiMonitor } from 'react-icons/fi';

export default function VerticalMenu({ onClick, isOpen, closeMenu }) {
  return (
    <div className={`VerticalMenu ${isOpen && 'active'}`}>
      <button className="close" onClick={onClick}>
        <AiOutlineCloseCircle />
      </button>
      <MenuLink
        onClick={closeMenu}
        text="HOME"
        icon={<AiOutlineHome className="icon" />}
        url={'/'}
      />
      <MenuLink
        onClick={closeMenu}
        text=" MANAGE TV SHOWS"
        icon={<FiMonitor className="icon" />}
        url={'/manage/tv-shows'}
      />
    </div>
  );
}
