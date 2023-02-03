import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
    name:"countries",
    initialState:{
        countries:[]
    },
    reducers:{
        getCountries(state, actions){
            state.countries = actions.payload
        }
    }
})