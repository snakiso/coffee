import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AdditivesType, ResType, Sizes, SizeType} from "../../api/api";


export type CardSizeType = SizeType & {
    active: 'active' | 'unActive'
}

export type CardAdditivesType = AdditivesType & {
    active: 'active' | 'unActive'
}

export type FinalCardData = ResType & {
    size: CardSizeType[]
    additives: CardAdditivesType[]
    price: number
}


const slice = createSlice({
    name: 'card',
    initialState: {} as FinalCardData,
    reducers: {
        setCardInfo: (state, action: PayloadAction<{ item: ResType }>) => {
            return {
                ...action.payload.item,
                size: action.payload.item.size.map(el => (el.id === Sizes.S ? {...el, active: 'active'} : {
                    ...el,
                    active: 'unActive'
                })),
                additives: action.payload.item.additives.map(el => ({...el, active: 'unActive'})),
                price: action.payload.item.size[0].price
            }
        },
        clearCardInfo: (state, action) => {
            return {} as FinalCardData
        },
        changeSize: (state, action: PayloadAction<{ id: number }>) => {
            state.size = state.size.map(el => (el.id === action.payload.id ? {...el, active: 'active'} : {
                ...el,
                active: 'unActive'
            }))
            state.additives = state.additives.map(el => ({...el, active: 'unActive'}))
            state.price = state.size[action.payload.id].price
        },
        changeAdditive: (state, action: PayloadAction<{ id: number }>) => {
            state.additives[action.payload.id].active = state.additives[action.payload.id].active === 'active' ? 'unActive' : 'active'
            state.price = state.additives[action.payload.id].active === 'active'
                ? state.price + state.additives[action.payload.id].price
                : state.price - state.additives[action.payload.id].price
        }
    },
})


export const cardReducer = slice.reducer

export const {setCardInfo, clearCardInfo, changeSize, changeAdditive} = slice.actions