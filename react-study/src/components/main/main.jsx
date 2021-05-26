import React from 'react';

import { ArtFirst } from '../artFirst';
import { ArtSecond } from '../artSecond';


import style from'./main.module.css'



export const Main = () => (
    <div className={style.main}>
        <ArtFirst />
        <ArtSecond />
        
        

        {/* <div className={style.artFirst}>
            <Article />
            <Article />
        </div>
        <div className={style.content}>
                
        </div>
        <div className={style.artSecond}>
            <Article />
            <Article />
            <Article />
        </div> */}
    </div>
)

