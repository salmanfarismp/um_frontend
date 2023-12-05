import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React from "react";
import TabRouter from "../Routes/TabRouter";
import TabBar from "../components/common/TabBar";
import { Redirect, Route } from "react-router";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Customers";
import Tab3 from "../pages/Tab3";
import {
  book,
  ellipse,
  home,
  people,
  settings,
  square,
  triangle,
} from "ionicons/icons";

const HomeLayout = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <TabRouter />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon aria-hidden="true" icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="customers" href="/customers">
          <IonIcon aria-hidden="true" icon={people} />
          <IonLabel>Customers</IonLabel>
        </IonTabButton>
        <IonTabButton tab="register" href="/register">
          <IonIcon aria-hidden="true" icon={book} />
          <IonLabel>Register</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/settings">
          <IonIcon aria-hidden="true" icon={settings} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default HomeLayout;
