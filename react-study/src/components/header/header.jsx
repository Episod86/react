import React from 'react';

import style from './header.module.css'

export class Header extends React.Component {
    render() {
        return (
            <div className={style.header}>
                <div className={style.logo}>div "logo"</div>
                <nav className={style.topMenu}>nav class="topMenu"</nav>
            </div >
        )
    }
};