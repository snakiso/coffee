import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fetchTea} from "./tea-reducer";
import {Card} from "../../../components/card/Card";
import {Loader} from "../../../components/loader/Loader";

export const Tea = () => {
    const teaData = useAppSelector(state => state.tea)
    const appStatus = useAppSelector(state => state.app.status)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTea())
    }, [])

    return (
        <>

            {appStatus === 'loading'
                ?
                <Loader/>
                :
                teaData.map(el => <Card key={el.id} item={el}/>)}
        </>
    );
};

