import {asyncThunkCreator, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API, ResType} from "../../../api/api";
import {appActions} from "../../../app/app-reducer";


const slice = createSlice({
        name: 'tea',
        initialState: [] as ResType[],
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(fetchTea.fulfilled, (state, action) => {
                    return action.payload.tea
                })
    }
)

export const teaReducer = slice.reducer

export const fetchTea = createAsyncThunk<{ tea: ResType[] }>(
    'tea/fetchTea',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        dispatch(appActions.changeStatus({status: 'loading'}))
        const res = await API.getTea()
        dispatch(appActions.changeStatus({status: 'idle'}))
        return {tea: res.data}
    }
)