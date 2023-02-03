import { createSlice } from "@reduxjs/toolkit";
import countriesAPI from "../../services/countriesAPI";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [""],
  },
  reducers: {
    getCountries(state, actions) {
      state.countries = actions.payload;
    },
  },
});
export const initializeCountries = () => {
    return async (dispatch) => {
        const countries = await countriesAPI.getAll();
        dispatch(getCountries(countries))
    }
};

export const {getCountries} = countriesSlice.actions;
export default countriesSlice.reducer;