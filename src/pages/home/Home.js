import React, { useContext, useState, useEffect } from 'react';
import classes from './Home.module.scss';
import DeviceContext from '../../store/device-context';
import Security from '../../components/security/Security';
import Lights from '../../components/lights/Lights';
import AC from '../../components/ac/AC';
import Coffee from '../../components/coffee/Coffee';
import Roomba from '../../components/roomba/Roomba';

const Home = () => {
  const ctx = useContext(DeviceContext);

  return (
    <div className={classes.main}>
      <div className={classes.first}>
        <div className={classes.security}>
          <Security ctx={ctx.home} />
        </div>
        <div className={classes.lights}>
          <Lights ctx={ctx.home} />
        </div>
      </div>
      <div className={classes.full}>
        <div className={classes.ac}>
          <AC ctx={ctx.home} />
        </div>
        <div className={classes.small}>
          <Coffee ctx={ctx.home} sec={10} title={'Home'} />
          <Roomba ctx={ctx.home} min={0} sec={15} title={'Home'} />
        </div>
      </div>
    </div>
  );
};

export default Home;
