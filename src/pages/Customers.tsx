import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import { pin, share, trash } from "ionicons/icons";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Customers</IonTitle>
          <IonTitle slot="end" size="small">
            Total : 20
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Customers</IonTitle>
            <IonTitle slot="end" size="small">
              Total : 20
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonListHeader className="ion-padding" >Cyber Park</IonListHeader>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Rick Astley</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Leeroy Jenkins</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Ionitron</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Wall-E</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Cortana</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Bender</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>BB-8</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
        <IonList>
          <IonListHeader className="ion-padding" >Cyber Park</IonListHeader>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Rick Astley</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Leeroy Jenkins</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Ionitron</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Wall-E</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Cortana</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

        
        </IonList>
        <IonList>
          <IonListHeader className="ion-padding" >Cyber Park</IonListHeader>
          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Rick Astley</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Leeroy Jenkins</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Ionitron</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Wall-E</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Cortana</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Bender</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem button={true}>
              <IonAvatar aria-hidden="true" slot="start">
                <img
                  alt=""
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>BB-8</IonLabel>
            </IonItem>
            <IonItemOptions slot="end">
              <IonItemOption color="warning">
                <IonIcon slot="icon-only" icon={pin}></IonIcon>
              </IonItemOption>
              <IonItemOption color="tertiary">
                <IonIcon slot="icon-only" icon={share}></IonIcon>
              </IonItemOption>
              <IonItemOption color="danger" expandable={true}>
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
