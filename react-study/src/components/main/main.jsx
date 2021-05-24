import React from 'react';

import './main.css'

export const Main = () => (
        <div className="main">
            <h2>Продам картину &#171;Дерево жизни&#187;!</h2> 
            <h3 className="text-red text-italic"> Продаю и другие работы, выполненные маслом. Картины на холстах (без рам), возможно оформление в раму 
                за дополнительную плату.
            </h3>
            <p><span className="text-bold">Размер: </span>40 X 60 см, состоит из 3 одинаковых по размеру частей</p>
            <p><span className="text-bold">Цена: </span>
               <span className="text-through">6000</span>
               <span className="text-red text-bold"> 5 500</span>
            </p>
            <p className="text-red text-italic"> Принимаю заказы! Пишите, отвечу с удовольствием.</p>
            <p><span className="text-bold">Имя: </span> Александр</p>
            <p><span className="text-bold">Контактный телефон: </span>238-77-65</p>
        </div>
    )
