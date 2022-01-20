import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.scss';
import SideBar from './components/sideBar/SideBar';
import Header from './components/header/Header';
import LivingRoom from './pages/livingRoom/LivingRoom';
import Kitchen from './pages/kitchen/Kitchen';
import MasterBedroom from './pages/masterBedroom/MasterBedroom';
import GuestBedroom from './pages/guestBedroom/GuestBedroom';

function App() {
  return (
    <div className='main'>
      <Header />
      <div className='page'>
        <SideBar />
        <div className='content'>
          <Switch>
            <Route path={'/Home'}>
              <Home />
            </Route>
            <Route path={'/Living Room'}>
              <LivingRoom />
            </Route>
            <Route path={'/Kitchen'}>
              <Kitchen />
            </Route>
            <Route path={'/Master Bedroom'}>
              <MasterBedroom />
            </Route>
            <Route path={'/Guest Bedroom'}>
              <GuestBedroom />
            </Route>
            <Route path={'/'} exact>
              <Redirect to={'/home'} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
