import React from 'react';

import style from './app.module.css';

import Bar from '../navigation/Bar';
import Results from '../search/Results';
import Footer from '../footer/Footer';

import { StateProvider } from '../store/state.js';
import initialState from '../store/initialState.js';
import reducer from '../store/reducer';

const App = () => {
  
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
        <div className={style.mainApp}>
                <div className={style.top}><Bar /></div>
                <div className={style.mid}><Results /></div>
                <div className={style.bot}><Footer /></div>
            </div>
    </StateProvider>
  );
}

export default App;