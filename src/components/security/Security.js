import React, { useState, useEffect } from 'react';
import classes from './Security.module.scss';
import {
  AlarmOffOutlined,
  AlarmOnOutlined,
  DoorbellOutlined,
  LockOpenOutlined,
  LockOutlined,
} from '@mui/icons-material';

const Security = (props) => {
  const [lobbyDoorOpen, setLobbyDoorOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLobbyDoorOpen(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [lobbyDoorOpen]);
  return (
    <>
    <div className={classes.head}>
      <DoorbellOutlined />
      <h2>Security</h2>
      </div>
      <div className={classes.item}>
        <div className={classes.titleDiv}>
          <h2 className={classes.title}>Alarm</h2>
          {props.ctx.security && (
            <AlarmOnOutlined className={classes.iconGreen} />
          )}
          {!props.ctx.security && (
            <AlarmOffOutlined className={classes.iconGray} />
          )}
        </div>
        <div className={classes.actions}>
          <span>{props.ctx.security ? 'Alarm active' : 'Alarm off'}</span>
          <button
            className={classes.btn}
            onClick={() => props.ctx.toggleHandler('security', 'Home')}
          >
            {!props.ctx.security ? 'Arm Alarm' : 'Disarmed Alarm'}
          </button>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.titleDiv}>
          <h2 className={classes.title}>Lobby Door</h2>
          {!lobbyDoorOpen && <LockOutlined className={classes.iconRed} />}
          {lobbyDoorOpen && <LockOpenOutlined className={classes.iconGreen} />}
        </div>
        <div className={classes.actions}>
          <span>{lobbyDoorOpen ? 'Opening...' : 'Lobby door Locked'}</span>
          <button
            className={classes.btn}
            onClick={() => setLobbyDoorOpen(true)}
          >
            {lobbyDoorOpen ? 'Opening...' : 'Open Lobby'}
          </button>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.titleDiv}>
          <h2 className={classes.title}>Home Door</h2>
          {!props.ctx.door && <LockOutlined className={classes.iconRed} />}
          {props.ctx.door && <LockOpenOutlined className={classes.iconGreen} />}
        </div>
        <div className={classes.actions}>
          <span>{props.ctx.door ? 'Home Door Open' : 'Home Door Locked'}</span>
          <button
            className={classes.btn}
            onClick={() => props.ctx.toggleHandler('homeDoor', 'Home')}
          >
            {!props.ctx.door ? 'Open Home' : 'Lock Home'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Security;
