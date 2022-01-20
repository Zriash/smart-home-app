import { CoffeeMakerOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import classes from './Coffee.module.scss';

const Coffee = (props) => {
  const sec = props.sec;
  const [isCoffee, setIsCoffee] = useState(false);
  const [Time, setTime] = useState(sec);
  const [isFinished, setIsFinished] = useState(false);
  const [msg, setMsg] = useState('Make me fresh coffee');

  useEffect(() => {
    if (props.ctx.coffee) {
      clickHandler('Outside');
    } else if (!props.ctx.coffee) {
      setIsCoffee(false);
      setIsFinished(false);
      setTime(sec);
      setMsg('Make me fresh coffee');
    }
  }, [props.ctx.coffee]);

  const counter = () => {
    if (Time <= 10) {
      setTime(`0${Time - 1}`);
    } else {
      setTime(Time - 1);
    }
  };

  useEffect(() => {
    if (isCoffee) {
      const timer = setTimeout(() => {
        props.ctx.toggleHandler('coffee', props.title);
        setIsCoffee(false);
        setIsFinished(true);
        setMsg('Coffee Ready');
      }, sec * 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isCoffee]);

  useEffect(() => {
    if (isCoffee) {
      const timer = setInterval(() => counter(), 1000);
      return () => clearInterval(timer);
    }
  });

  const clickHandler = (action) => {
    setIsFinished(false);
    setTime(sec);
    if (action === 'Outside') {
      setIsCoffee(true);
      setMsg('Making fresh coffee');
    }
    if (action === 'Start') {
      props.ctx.toggleHandler('coffee', props.title);
      setMsg('Making fresh coffee');
      setIsCoffee(true);
    } else if (action === 'Stop') {
      props.ctx.toggleHandler('coffee', props.title);
      setMsg('Make me fresh coffee');
      setIsCoffee(false);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <CoffeeMakerOutlined />
        <h2>{msg}</h2>
      </div>
      <div className={classes.content}>
        {!isFinished && <h2>{Time}</h2>}
        {!isCoffee ? (
          <button className={classes.btn} onClick={() => clickHandler('Start')}>
            {isFinished ? 'Restart' : 'Start'}
          </button>
        ) : (
          <button className={classes.btn} onClick={() => clickHandler('Stop')}>Stop</button>
        )}
      </div>
    </div>
  );
};

export default Coffee;
