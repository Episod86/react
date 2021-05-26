import React from 'react';

import { ArtFirst } from '../artFirst';
import { ArtSecond } from '../artSecond';
import { Content } from '../content';


import style from'./main.module.css';

export const Main = () => (
    <div className={style.main}>
        <ArtFirst />
        <Content />
        <ArtSecond />
    </div>
)

