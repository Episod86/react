import React from 'react';

import { Article } from '../article';

import style from'./main.module.css'

export const Main = () => (
        <div className={style.main}>
            <div className={style.art}>
                <Article />
                <Article />
            </div>
            <div className={style.content}>
                
            </div>
            <div className={style.art}>
                <Article />
                <Article />
                <Article />
            </div>
        </div>
    )
