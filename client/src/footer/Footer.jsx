import React from 'react';

import style from './Footer.module.css';

const bot = () => {
    return (
        <div className={style.botCont}>
            <div className={style.comp}>
                <h3>COMPANY</h3>
                <p>About us</p>
                <p>Careers</p>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Help</p>
            </div>
            <div className={style.wwu}>
                <h3>WORK WITH US</h3>
                <p>Authors</p>
                <p>Advertise</p>
                <p>Authors & ads blog</p>
                <p>API</p>
            </div>
            <div className={style.con}>
                <h3>CONNECT</h3>
            </div>
            <div className={style.disc}>
                <p>placeholder</p>
            </div>
        </div>
    )
};

export default bot;