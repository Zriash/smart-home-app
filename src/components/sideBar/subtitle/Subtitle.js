import { useHistory, useLocation } from 'react-router-dom';

import { Switch, Stack, Typography } from '@mui/material';
import {
  AcUnit,
  ArrowForwardIos,
  CleaningServicesOutlined,
  CoffeeMakerOutlined,
  DoorbellOutlined,
  LightbulbRounded,
} from '@mui/icons-material';
import React, { useState, useEffect, useContext } from 'react';
import classes from './Subtitle.module.scss';
// import DeviceContext from '../../../store/device-context';

const Subtitle = (props) => {
  // const ctx = useContext(DeviceContext);
  const location = useLocation();
  const history = useHistory();
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (location.pathname.toUpperCase() === '/' + props.title.toUpperCase()) {
      setIsClicked(true);
    }
    if (location.pathname.toUpperCase() !== '/' + props.title.toUpperCase()) {
      setIsClicked(false);
    }
  }, [location.pathname]);

  const hoverHandler = (state) => {
    if (state === 'Enter') {
      setIsHover(true);
    } else if (state === 'Leave') {
      setIsHover(false);
    }
  };
  return (
    <div
      className={classes.main}
      onMouseEnter={() => hoverHandler('Enter')}
      onMouseLeave={() => hoverHandler('Leave')}
    >
      <div
        className={`${classes.titleDiv} ${isClicked ? classes.active : ''}`}
        onClick={() => history.push(`${props.title}`)}
      >
        <h1 className={classes.title}>{props.title}</h1>
        <ArrowForwardIos className={classes.titleIcon} />
      </div>
      {isHover && (
        <div className={classes.show}>
          {props.security && (
            <div className={classes.option}>
              <div className={classes.optionLeft}>
                <DoorbellOutlined className={classes.icon} />
                <span className={classes.text}>Security</span>
              </div>
              <div className={classes.switch}>
                <Stack direction='row' spacing={0} alignItems='center'>
                  <Typography className={classes.legend}>Off</Typography>
                  <Switch
                    inputProps={{ 'aria-label': 'ant design' }}
                    checked={props.ctx.security}
                    onChange={() => props.ctx.toggleHandler('security', props.title)}
                  />
                  <Typography className={classes.legend}>Armed</Typography>
                </Stack>
              </div>
            </div>
          )}
          {props.lights && (
            <div className={classes.option}>
              <div className={classes.optionLeft}>
                <LightbulbRounded className={classes.icon} />
                <span className={classes.text}>Lights</span>
              </div>
              <div className={classes.switch}>
                <Stack direction='row' spacing={0} alignItems='center'>
                  <Typography className={classes.legend}>Off</Typography>
                  <Switch
                    inputProps={{ 'aria-label': 'ant design' }}
                    checked={props.ctx.lights}
                    onChange={() => props.ctx.toggleHandler('lights', props.title)}
                  />
                  <Typography className={classes.legend}>On</Typography>
                </Stack>
              </div>
            </div>
          )}
          {props.ac && (
            <div className={classes.option}>
              <div className={classes.optionLeft}>
                <AcUnit className={classes.icon} />
                <span className={classes.text}>AC</span>
              </div>
              <div className={classes.switch}>
                <Stack direction='row' spacing={0} alignItems='center'>
                  <Typography className={classes.legend}>Off</Typography>
                  <Switch
                    inputProps={{ 'aria-label': 'ant design' }}
                    checked={props.ctx.ac}
                    onChange={() => props.ctx.toggleHandler('ac', props.title)}
                  />
                  <Typography className={classes.legend}>On</Typography>
                </Stack>
              </div>
            </div>
          )}
          {props.coffee && (
            <div className={classes.option}>
              <div className={classes.optionLeft}>
                <CoffeeMakerOutlined className={classes.icon} />
                <span className={classes.text}>Cofee Maker</span>
              </div>
              <div className={classes.switch}>
                <Stack direction='row' spacing={0} alignItems='center'>
                  <Typography className={classes.legend}>Off</Typography>
                  <Switch
                    inputProps={{ 'aria-label': 'ant design' }}
                    checked={props.ctx.coffee}
                    onChange={() => props.ctx.toggleHandler('coffee', props.title)}
                  />
                  <Typography className={classes.legend}>On</Typography>
                </Stack>
              </div>
            </div>
          )}
          {props.roomba && (
            <div className={classes.option}>
              <div className={classes.optionLeft}>
                <CleaningServicesOutlined className={classes.icon} />
                <span className={classes.text}>Roomba</span>
              </div>
              <div className={classes.switch}>
                <Stack direction='row' spacing={0} alignItems='center'>
                  <Typography className={classes.legend}>Off</Typography>
                  <Switch
                    inputProps={{ 'aria-label': 'ant design' }}
                    checked={props.ctx.roomba}
                    onChange={() => props.ctx.toggleHandler('roomba', props.title)}
                  />
                  <Typography className={classes.legend}>
                    Clean {props.title}
                  </Typography>
                </Stack>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Subtitle;
