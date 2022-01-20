import React, { useContext } from 'react';
import classes from './SideBar.module.scss';
import Subtitle from './subtitle/Subtitle';
import DeviceContext from '../../store/device-context';

const SideBar = () => {
  const ctx = useContext(DeviceContext);


  return (
    <div className={classes.main}>
      <Subtitle title='Home' security lights ac coffee roomba ctx={ctx.home} />
      <Subtitle title='Living Room' ctx={ctx.livingRoom} lights ac roomba />
      <Subtitle title='Kitchen' ctx={ctx.kitchen} lights coffee roomba />
      <Subtitle title='Master Bedroom' ctx={ctx.masterBedroom} lights ac roomba />
      <Subtitle title='Guest Bedroom' ctx={ctx.guestBedroom} lights ac roomba />
    </div>
  );
};

export default SideBar;
