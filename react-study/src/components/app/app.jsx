import React from 'react';

import { Header } from '../header';
import { Main } from '../main';
import { Footer } from '../footer';

import './app.css'

export const App = (props) => (
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    )
