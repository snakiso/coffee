import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API, ResType} from "../../../api/api";
import {appActions} from "../../../app/app-reducer";

const slice = createSlice({

    name: 'coffee',
    initialState: [] as ResType[],
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchCoffee.fulfilled, (state, action) => {
                return action.payload.coffee
            })


})


export const coffeeReducer = slice.reducer;

export const fetchCoffee = createAsyncThunk<{ coffee: ResType[] }>(
    'coffee/fetchCoffee',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        dispatch(appActions.changeStatus({status: 'loading',}))
        const res = await API.getCoffee()
        dispatch(appActions.changeStatus({status: 'idle'}))
        return {coffee: res.data}
    }
)