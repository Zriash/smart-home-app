import { AcUnit, PowerSettingsNewOutlined, WbSunny } from '@mui/icons-material';
import { Box, Slider } from '@mui/material';
import React, { useState } from 'react';
import classes from './AC.module.scss';

const AC = (props) => {
  const [temp, setTemp] = useState(22);

  function valuetext(value) {
    setTemp(value);
    return value;
  }

  return (
    <>
      <div className={classes.head}>
        <AcUnit />
        <h2>AC Unit</h2>
      </div>
      <div className={classes.actions}>
        <div className={classes.lightControl}>
          <h2 className={classes.title}>AC:</h2>
          <PowerSettingsNewOutlined
            className={`${classes.iconBtn} ${
              props.ctx.ac ? classes.on : classes.off
            }`}
            onClick={() => props.ctx.toggleHandler('ac', 'Home')}
          />
          <span>{props.ctx.ac ? 'on' : 'off'}</span>
        </div>
        <div className={classes.temp}>
            <h2 className={classes.titleTemp}>Tempeture:</h2>
            <h2 className={temp>24 ? classes.hot:classes.cold}>{temp}</h2>
          </div>

          <div className={classes.brightness}>
            <div className={`${classes.iconDiv} ${classes.cold}`}>
              <span>Cold</span>
              <AcUnit />
            </div>

            <Box sx={{ width: '100%' }}>
              <Slider
                aria-label='Brightness'
                defaultValue={22}
                getAriaValueText={valuetext}
                valueLabelDisplay='auto'
                step={1}
                marks
                min={16}
                max={30}
                disabled={!props.ctx.ac}
              />
            </Box>
            <div className={`${classes.iconDiv} ${classes.hot}`}>
              <span>Hot</span>
              <WbSunny />
            </div>
          </div>
        </div>
    </>
  );
};

export default AC;
