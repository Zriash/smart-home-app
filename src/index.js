import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { DeviceContextProvider } from './store/device-context';
import App from './App';

ReactDOM.render(
  <DeviceContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DeviceContextProvider>,
  document.getElementById('root')
);
