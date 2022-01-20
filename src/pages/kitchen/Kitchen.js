import React, { useContext } from 'react';
import classes from './Kitchen.module.scss';
import DeviceContext from '../../store/device-context';
import Lights from '../../components/lights/Lights';
import Roomba from '../../components/roomba/Roomba';
import Coffee from '../../components/coffee/Coffee';

const Kitchen = () => {
  const ctx = useContext(DeviceContext);
  return (
    <div className={classes.main}>
      <div className={classes.first}>
        <div className={classes.small}>
          <Coffee ctx={ctx.kitchen} sec={10} title={'Kitchen'} />
        </div>
        <div className={classes.small}>
          <Roomba ctx={ctx.kitchen} min={0} sec={15} title={'Kitchen'} />
        </div>
      </div>
      <div className={classes.section}>
        <Lights ctx={ctx.kitchen} />
      </div>
    </div>
  );
};

export default Kitchen;
