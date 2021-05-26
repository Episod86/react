import React from 'react';
import { Aside } from '../aside';

import style from './content.module.css';

export class Content extends React.Component {
    render() {
        return (
            <div className={style.content}>  
                <Aside />
                <div className={style.main}>main</div>
                <Aside />
            </div>
          )
    }
};