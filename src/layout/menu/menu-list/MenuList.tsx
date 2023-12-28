import React from 'react';
import s from "../menu.module.scss";
import {Route, Routes} from "react-router-dom";
import {Coffee} from "../coffee/Coffee";
import {Tea} from "../tea/Tea";
import {Deserts} from "../deserts/Deserts";

export const MenuList = () => {

    return (
        <div className={s.menu__list}>
                <Routes>
                    <Route path={'coffee'} element={<Coffee/>}/>
                    <Route path={'tea'} element={<Tea/>}/>
                    <Route path={'deserts'} element={<Deserts/>}/>
                </Routes>
        </div>
    );
};

