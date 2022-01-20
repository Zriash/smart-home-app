import { CleaningServicesOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import classes from './Roomba.module.scss';

const Roomba = (props) => {
  const min = props.min;
  const sec = props.sec;
  const [isRoomba, setIsRoomba] = useState(false);
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);
  const [isFinished, setIsFinished] = useState(false);
  const [msg, setMsg] = useState(`Clean ${props.title}`);

  useEffect(() => {
    if (props.ctx.roomba) {
      clickHandler('Outside');
    } else if (!props.ctx.roomba) {
      setIsRoomba(false);
      setIsFinished(false);
      setMinutes(min);
      setSeconds(sec);
      setMsg(`Clean ${props.title}`);
    }
  }, [props.ctx.roomba]);

  const counter = () => {
    if (parseInt(seconds) === 0 && minutes > 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else if (parseInt(seconds) <= 10) {
      setSeconds(`0${seconds - 1}`);
    } else {
      setSeconds(seconds - 1);
    }
  };

  useEffect(() => {
    if (isRoomba) {
      const timer = setTimeout(() => {
        props.ctx.toggleHandler('roomba', props.title);
        setIsRoomba(false);
        setIsFinished(true);
        setMsg(`${props.title} Cleaned`);
      }, (min * 60 + sec) * 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isRoomba, props.ctx.roomba]);

  useEffect(() => {
    if (isRoomba) {
      const timer = setInterval(() => counter(), 1000);
      return () => clearInterval(timer);
    }
  });

  const clickHandler = (action) => {
    setIsFinished(false);
    setMinutes(min);
    setSeconds(sec);
    if (action === 'Outside') {
      setIsRoomba(true);
      setMsg(`Vacuming ${props.title}...`);
    }
    if (action === 'Start') {
      props.ctx.toggleHandler('roomba', props.title);
      setIsRoomba(true);
      setMsg(`Vacuming ${props.title}...`);
    } else if (action === 'Stop') {
      props.ctx.toggleHandler('roomba', props.title);
      setIsRoomba(false);
      setMsg(`Clean ${props.title}`);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <CleaningServicesOutlined />
        <h2>{msg}</h2>
      </div>
      <div className={classes.content}>
        {!isFinished && <h2>{`${minutes}:${seconds}`}</h2>}
        {!isRoomba ? (
          <button className={classes.btn} onClick={() => clickHandler('Start')}>
            {isFinished ? 'Restart' : 'Start'}
          </button>
        ) : (
          isRoomba && <button className={classes.btn} onClick={() => clickHandler('Stop')}>Stop</button>
        )}
      </div>
    </div>
  );
};

export default Roomba;
