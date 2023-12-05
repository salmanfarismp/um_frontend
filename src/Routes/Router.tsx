import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Redirect, Route } from "react-router";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Customers";
import Tab3 from "../pages/Tab3";
import { ellipse, square, triangle } from "ionicons/icons";

const Router = () => {
  return (
    <IonReactRouter>
      <HomeLayout />
    </IonReactRouter>
  );
};

export default Router;
