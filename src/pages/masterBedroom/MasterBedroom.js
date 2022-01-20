import React, { useContext } from 'react';
import classes from './MasterBedroom.module.scss';
import DeviceContext from '../../store/device-context';
import Lights from '../../components/lights/Lights';
import Roomba from '../../components/roomba/Roomba';
import AC from '../../components/ac/AC';

const LivingRoom = () => {
  const ctx = useContext(DeviceContext);
  return (
    <div className={classes.main}>
      <div className={classes.first}>
        <div className={classes.section}>
          <Lights ctx={ctx.masterBedroom} />
        </div>
        <div className={classes.small}>
          <Roomba ctx={ctx.masterBedroom} min={0} sec={15} title={'Master Bedroom'} />
        </div>
      </div>
      <div className={classes.section}>
        <AC ctx={ctx.masterBedroom} />
      </div>
    </div>
  );
};

export default LivingRoom;
