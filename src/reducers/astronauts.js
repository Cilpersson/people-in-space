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
    const proxyurl = " https://thingproxy.freeboard.io/fetch/";
    const url =
      "https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json";
    fetch(proxyurl + url)
      .then((data) => data.json())
      .then((json) => {
        dispatch(astronauts.actions.setAstronauts(json));
        dispatch(ui.actions.setLoading(false));
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  };
};
