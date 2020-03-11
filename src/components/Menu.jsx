import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { archiveOutline, archiveSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp } from 'ionicons/icons';
import { getUser } from '../contexts/Session'
import './Menu.css';

const volunteerActions = [
  {
    title: 'Dashboard',
    url: '/page/Dashboard',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'My Classes',
    url: '/page/MyClasses',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Donations',
    url: '/page/Donations',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Events',
    url: '/page/Events',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Profile',
    url: '/page/Profile',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  }
];

const fellowActions = [
  {
    title: 'Volunteers',
    url: '/page/Volunteers',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Allocate',
    url: '/page/Allocate',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Deposit',
    url: '/page/Deposit',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Create Events',
    url: '/page/CreateEvents',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  }
];


const Menu = ({ selectedPage }) => {
  const user = getUser()
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Dashboard</IonListHeader>
          <IonNote>{ user.name }</IonNote>
          {volunteerActions.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={selectedPage === appPage.title ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Admin Actions</IonListHeader>
          {fellowActions.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={selectedPage === appPage.title ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default withRouter(Menu);