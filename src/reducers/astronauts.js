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
    // fetch(`https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json`)
    //   .then((data) => data.json())
    //   .then((json) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
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

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url =
//   "https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
//   .then((response) => response.text())
//   .then((contents) => console.log(contents))
