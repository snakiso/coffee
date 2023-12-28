import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fetchDeserts} from "./deserts-reducer";
import {Card} from "../../../components/card/Card";
import {Loader} from "../../../components/loader/Loader";

export const Deserts = () => {
    const desertsData = useAppSelector(state => state.deserts)
    const appStatus = useAppSelector(state => state.app.status)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchDeserts())
    }, []);
    return (
        <>
            {appStatus === 'loading'
                ?
                <Loader/>
                :
                desertsData.map(el => <Card key={el.id} item={el}/>)}
        </>
    );
};

