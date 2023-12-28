import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {coffeeReducer} from "../layout/menu/coffee/coffee-reducer";
import {teaReducer} from "../layout/menu/tea/tea-reducer";
import {desertsReducer} from "../layout/menu/deserts/deserts-reducer";
import {cardReducer} from "../layout/menu/card-reducer";
import {appReducer} from "../app/app-reducer";

export const store = configureStore({
    reducer: {
        app: appReducer,
        coffee: coffeeReducer,
        tea: teaReducer,
        deserts: desertsReducer,
        card: cardReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector