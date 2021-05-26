import React from 'react';

import style from './article.module.css';

export class Article extends React.Component {
    render() {
        return (
            <div className={style.article}> article </div>
          )
    }
};