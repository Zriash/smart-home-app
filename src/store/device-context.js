import React, { useState } from 'react';

const DeviceContext = React.createContext({
  home: {
    security: true,
    lights: false,
    ac: false,
    coffee: false,
    roomba: false,
    door: false,
  },
  livingRoom: {
    lights: false,
    ac: false,
    roomba: false,
  },
  kitchen: {
    lights: false,
    cofee: false,
    roomba: false,
  },
  masterBedroom: {
    lights: false,
    cofee: false,
    roomba: false,
  },
  guestBedroom: {
    lights: false,
    cofee: false,
    roomba: false,
  },
  toggleHandler: (data, location) => {},
});

export const DeviceContextProvider = (props) => {
  const [security, setSecurity] = useState(true);
  const [door, setDoor] = useState(false);
  const [lights, setLights] = useState(false);
  const [lightsLivingRoom, setLightsLivingRoom] = useState(false);
  const [lightsKitchen, setLightsKitchen] = useState(false);
  const [lightsMasterBedroom, setLightsMasterBedroom] = useState(false);
  const [lightsGuestBedroom, setLightsGuestBedroom] = useState(false);
  const [ac, setAc] = useState(false);
  const [acLivingRoom, setAcLivingRoom] = useState(false);
  const [acMasterBedroom, setAcMasterBedroom] = useState(false);
  const [acGuestBedroom, setAcGuestBedroom] = useState(false);
  const [coffee, setCoffee] = useState(false);
  const [roomba, setRoomba] = useState(false);
  const [roombaLivingRoom, setRoombaLivingRoom] = useState(false);
  const [roombaMasterBedroom, setRoombaMasterBedroom] = useState(false);
  const [roombaGuestBedroom, setRoombaGuestBedroom] = useState(false);
  const [roombaKitchen, setRoombaKitchen] = useState(false);

  const toggleHandler = (data, location) => {
    if (location === 'Home')
      switch (data) {
        case 'security':
          setSecurity(!security);
          break;
        case 'homeDoor':
          setDoor(!door);
          break;
        case 'lights':
          setLightsLivingRoom(!lights);
          setLightsKitchen(!lights);
          setLightsMasterBedroom(!lights);
          setLightsGuestBedroom(!lights);
          setLights(!lights);
          break;
        case 'ac':
          setAcLivingRoom(!ac);
          setAcMasterBedroom(!ac);
          setAcGuestBedroom(!ac);
          setAc(!ac);
          break;
        case 'coffee':
          setCoffee(!coffee);
          break;
        case 'roomba':
          setRoombaLivingRoom(!roomba);
          setRoombaKitchen(!roomba);
          setRoombaMasterBedroom(!roomba);
          setRoombaGuestBedroom(!roomba);
          setRoomba(!roomba);
          break;
      }
    if (location === 'Living Room')
      switch (data) {
        case 'lights':
          setLightsLivingRoom(!lightsLivingRoom);
          break;
        case 'ac':
          setAcLivingRoom(!acLivingRoom);
          break;
        case 'roomba':
          setRoombaLivingRoom(!roombaLivingRoom);
          break;
      }
    if (location === 'Kitchen')
      switch (data) {
        case 'lights':
          setLightsKitchen(!lightsKitchen);
          break;
        case 'coffee':
          setCoffee(!coffee);
          break;
        case 'roomba':
          setRoombaKitchen(!roombaKitchen);
          break;
      }
    if (location === 'Master Bedroom')
      switch (data) {
        case 'lights':
          setLightsMasterBedroom(!lightsMasterBedroom);
          break;
        case 'ac':
          setAcMasterBedroom(!acMasterBedroom);
          break;
        case 'roomba':
          setRoombaMasterBedroom(!roombaMasterBedroom);
          break;
      }
    if (location === 'Guest Bedroom')
      switch (data) {
        case 'lights':
          setLightsGuestBedroom(!lightsGuestBedroom);
          break;
        case 'ac':
          setAcGuestBedroom(!acGuestBedroom);
          break;
        case 'roomba':
          setRoombaGuestBedroom(!roombaGuestBedroom);
          break;
      }
  };

  return (
    <DeviceContext.Provider
      value={{
        home: { security, lights, ac, coffee, roomba, door, toggleHandler },
        livingRoom: {
          lights: lightsLivingRoom,
          ac: acLivingRoom,
          roomba: roombaLivingRoom,
          toggleHandler,
        },
        kitchen: {
          lights: lightsKitchen,
          coffee: coffee,
          roomba: roombaKitchen,
          toggleHandler,
        },
        masterBedroom: {
          lights: lightsMasterBedroom,
          ac: acMasterBedroom,
          roomba: roombaMasterBedroom,
          toggleHandler,
        },
        guestBedroom: {
          lights: lightsGuestBedroom,
          ac: acGuestBedroom,
          roomba: roombaGuestBedroom,
          toggleHandler,
        },
      }}
    >
      {props.children}
    </DeviceContext.Provider>
  );
};

export default DeviceContext;
