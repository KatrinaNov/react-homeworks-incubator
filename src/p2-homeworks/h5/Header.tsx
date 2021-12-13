import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./RoutesComponent";

function Header() {
  return (
    <div className={s.nav}>
      <div className={s.hamburger}>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
      </div>
      <ul className={s.menu}>
        <li className={`${s.item} ${s.active}`}>
          <NavLink to={PATH.PRE_JUNIOR}
                   className={(navActive) => navActive.isActive ? s.active : ""}>Pre-Junior</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to={PATH.JUNIOR}
                   className={(navActive) => navActive.isActive ? s.active : ""}>Junior</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to={PATH.JUNIOR_PLUS}
                   className={(navActive) => navActive.isActive ? s.active : ""}>Junior+</NavLink>
        </li>
      </ul>

    </div>
  )
}

export default Header
