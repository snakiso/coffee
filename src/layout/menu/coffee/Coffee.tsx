import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fetchCoffee} from "./coffee-reducer";
import {Card} from "../../../components/card/Card";
import {Loader} from "../../../components/loader/Loader";

export const Coffee = () => {

    const coffeeData = useAppSelector(state => state.coffee)
    const appStatus = useAppSelector(state => state.app.status)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(fetchCoffee())
    }, [])


    return (
        <>
            {appStatus === 'loading'
                ?
                <Loader/>
                : coffeeData.map(el => {
                    return (
                        <Card key={el.id} item={el}/>
                    )
                })}
        </>
    );
};

