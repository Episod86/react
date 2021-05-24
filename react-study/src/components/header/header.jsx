import React from 'react';

import './header.css'

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <hr />
                <h2>14, 15, 16 апреля! Праздничное открытие! Магазин промтоваров Галамарт! </h2>
                <div className="header-text">
                    <p className="text-bold"> В честь празника:</p>
                    <p> <span className="text-bold text-underline">При покупке от 500 рублей</span> - гарантированный
                        <span className="text-bold"> ПОДАРОК </span></p>
                    <p><span className="text-bold text-underline">Главный подарок </span>-
                       <span className="text-bold "> СЕРТИФИКАТ</span> на покупки
                       <span className="text-bold text-red"> 30000</span> рублей (разыгрывается между посетителями).</p>
                    <p className="text-italic"> <span className="text-red"> Обладатель определится в 16 <sup>00</sup>. </span>
                       Наш адрес: г.Минск, пр.Победителей, 20.
                    </p>
                </div>
                <hr />
            </div >
        )
    }
};