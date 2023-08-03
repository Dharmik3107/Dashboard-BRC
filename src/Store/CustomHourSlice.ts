import {createSlice, } from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit";
import type { CustomHourType } from "../Components/Overwrites/CustomHours/CustomHoursList"; 

export interface CustomHoursListType {
    CustomHoursList: CustomHourType[];
}

const initialState:CustomHoursListType = {
    CustomHoursList: []
}

export const CustomHourSlice = createSlice({
    name: "custom-hour",
    initialState,
    reducers:{
        addNewHour: (state, action:PayloadAction<CustomHourType>) => {
            state.CustomHoursList.push(action.payload)
            return state
        },
        removeHour: (state, action:PayloadAction<CustomHourType>) => {
            const id = action.payload.id;
            state.CustomHoursList = state.CustomHoursList.filter((ele)=> ele.id !== id)
        },
        editHour: (state, action:PayloadAction<CustomHourType>) => {
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