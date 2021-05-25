import React from 'react';

import logo from './assets/logo.svg';

import style from './header.module.css';

export class Header extends React.Component {
    render() {
        return (
            <div className={style.header}>
                <img src={logo} alt="картинка" className={style.logo} />
                HEADER
            </div>
        )
    }
};