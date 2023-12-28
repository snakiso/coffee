import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API, ResType} from "../../../api/api";
import {appActions} from "../../../app/app-reducer";

const slice = createSlice({
    name: 'deserts',
    initialState: [] as ResType[],
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchDeserts.fulfilled, (state, action) => {
                return action.payload.deserts
            })

})

export const desertsReducer = slice.reducer


export const fetchDeserts = createAsyncThunk<{ deserts: ResType[] }>(
    'deserts/fetchDeserts',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        dispatch(appActions.changeStatus({status: 'loading'}))
        const res = await API.getDeserts()
        dispatch(appActions.changeStatus({status: 'idle'}))
        return {deserts: res.data}
    }
)