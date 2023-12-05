import { IonRouterOutlet } from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Customers";
import Tab3 from "../pages/Tab3";
import Settings from "../pages/Settings";

const TabRouter = () => {
  return (
    <>
      <Route exact path="/home">
        <Tab1 />
      </Route>
      <Route exact path="/customers">
        <Tab2 />
      </Route>
      <Route exact path="/register">
        <Tab2 />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route exact path="/">
        <Redirect to="/tab1" />
      </Route>
    </>
  );
};

export default TabRouter;
