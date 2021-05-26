import React from 'react';
import { Article } from '../article';

import style from './artSecond.module.css'

export class ArtSecond extends React.Component {
    render() {
        return (
            <div className={style.ArtSecond}>  
                <Article />
                <Article />
                <Article />
            </div>
          )
    }
};