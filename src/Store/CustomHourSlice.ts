import {createSlice, } from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit";

export interface EventDataType {
    id: string,
    date: string,
    offer: number,
    start:string,
    end: string
}
export interface CustomHoursListType {
    CustomHoursList: EventDataType[];
}

const initialState:CustomHoursListType = {
    CustomHoursList: []
}

export const CustomHourSlice = createSlice({
    name: "custom-hour",
    initialState,
    reducers:{
        addNewHour: (state, action:PayloadAction<EventDataType>) => {
            state.CustomHoursList.push(action.payload)
            return state
        },
        removeHour: (state, action:PayloadAction<string>) => {
            const id = action.payload;
            state.CustomHoursList = state.CustomHoursList.filter((ele)=> ele.id !== id)
        },
        editHour: (state, action:PayloadAction<EventDataType>) => {
            const id = action.payload.id;
            state.CustomHoursList = state.CustomHoursList.map((ele)=> {
                if(ele.id === id) return action.payload
                return ele
            })
        }
    }
})

export const {addNewHour, editHour, removeHour} = CustomHourSlice.actions;
export default CustomHourSlice.reducer