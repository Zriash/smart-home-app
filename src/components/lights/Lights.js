import {
  Brightness6Outlined,
  Brightness7Outlined,
  LightbulbRounded,
  PowerSettingsNewOutlined,
} from '@mui/icons-material';
import { Checkbox, Box, Slider } from '@mui/material';
import React, { useState } from 'react';
import classes from './Lights.module.scss';

const Lights = (props) => {
  const [isCheckbox, setIsCheckbox] = useState(false);

  function valuetext(value) {
    return value;
  }
  return (
    <>
      <div className={classes.head}>
        <LightbulbRounded />
        <h2>Lights</h2>
      </div>
      <div className={classes.actions}>
        <div className={classes.lightControl}>
          <h2 className={classes.title}>Lights Mode:</h2>
          <PowerSettingsNewOutlined
            className={`${classes.iconBtn} ${
              props.ctx.lights ? classes.on : classes.off
            }`}
            onClick={() => props.ctx.toggleHandler('lights', 'Home')}
          />
          <span>{props.ctx.lights ? 'on' : 'off'}</span>
        </div>
        <div className={classes.dimmer}>
          <h2 className={props.ctx.lights ? '' : classes.off}>Dimmer</h2>
          <Checkbox
            onChange={() => setIsCheckbox(!isCheckbox)}
            disabled={!props.ctx.lights}
          />
        </div>
        <div className={classes.brightness}>
          <Brightness6Outlined
            className={`${classes.iconBrightness} ${
              isCheckbox && props.ctx.lights ? '' : classes.off
            }`}
          />
          <Box sx={{ width: '100%' }}>
            <Slider
              aria-label='Brightness'
              defaultValue={50}
              getAriaValueText={valuetext}
              valueLabelDisplay='auto'
              step={10}
              marks
              min={10}
              max={100}
              disabled={!props.ctx.lights || !isCheckbox}
            />
          </Box>
          <Brightness7Outlined
            className={`${classes.iconBrightness} ${
              isCheckbox && props.ctx.lights ? '' : classes.off
            }`}
          />
        </div>
        <div className={classes.color}>
          <label
            htmlFor='color'
            className={props.ctx.lights ? classes.active : classes.off}
          >
            <h2 className={classes.title}>Change Lights Color</h2>
          </label>
          <input
            type='color'
            defaultValue={'#ffffff'}
            id='color'
            disabled={!props.ctx.lights}
            className={props.ctx.lights ? classes.active : ''}
          />
        </div>
      </div>
    </>
  );
};

export default Lights;
