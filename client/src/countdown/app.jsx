import React from 'react';

import style from './app.module.css';

import Top from '../top/top';
import Mid from '../mid/mid';
import Bot from '../bot/bot';


class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className={style.mainApp}>
                <div className={style.top}><Top /></div>
                <div className={style.mid}><Mid /></div>
                <div className={style.bot}><Bot /></div>
            </div>
        )
    }
}
export default App;