import React from "react";
import { Provider } from "react-redux";
import { astronauts } from "../reducers/astronauts";
import { ui } from "../reducers/ui";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { FetchAstronauts } from "./FetchAstronauts";

export const Home = () => {
  const reducer = combineReducers({
    ui: ui.reducer,
    astronauts: astronauts.reducer,
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <FetchAstronauts />
    </Provider>
  );
};
