import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const astronauts = createSlice({
  name: "astronauts",
  initialState: {
    all: [],
  },
  reducers: {
    setAstronauts: (state, action) => {
      state.all = action.payload;
    },
  },
});

export const onStart = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(`http://api.open-notify.org/astros.json`)
      .then((data) => data.json())
      .then((json) => {
        dispatch(astronauts.actions.setAstronauts(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
