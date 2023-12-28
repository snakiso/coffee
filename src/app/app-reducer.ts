import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type StatusType = 'idle' | 'loading'

type AppType = {
    status: StatusType
    menuIsOpen: boolean
}

const slice = createSlice({
    name: 'app',
    initialState: {status:'idle', menuIsOpen: false} as AppType,
    reducers:{
        changeStatus: (state, action: PayloadAction<{status: StatusType}>) => {
            state.status = action.payload.status
        },
        changeMenuStatus: (state, action: PayloadAction<{menuIsOpen: boolean}>) => {
            state.menuIsOpen = action.payload.menuIsOpen
            document.body.style.overflow = state.menuIsOpen ? 'hidden' : 'unset'
        }
    }
})

export const appReducer = slice.reducer

export const appActions = slice.actions