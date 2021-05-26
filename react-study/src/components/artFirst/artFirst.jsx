import React from 'react';
import { Article } from '../article';

import style from './artFirst.module.css'

export class ArtFirst extends React.Component {
    render() {
        return (
            <div className={style.ArtFirst}>  
                <Article />
                <Article />
            </div>
          )
    }
};