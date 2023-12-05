import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import { settings } from "ionicons/icons";

const Settings = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Salman's Component</IonCardTitle>
            <IonCardSubtitle>Salman Faris M P</IonCardSubtitle>
          </IonCardHeader>
          {/* <IonCardContent>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </IonCardContent> */}
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonList lines="full">
              <IonItem>
                <IonLabel>Full Lines</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Full Lines</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Full Lines</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
