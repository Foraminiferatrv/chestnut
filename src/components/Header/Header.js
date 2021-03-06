import React, { useState } from 'react';

import classes from './Header.module.css';

import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';
import Profile from './Profile/Profile';
import SiteName from './SiteName/SiteName';
import SideDrawer from '../UI/SideDrawer/SideDrawer';
import BurgerMenuButton from '../UI/BurgerMenuButton/BurgerMenuButton';
import Backdrop from '../UI/Backdrop/Backdrop';


function Header() {
  const [headerUiState, setHeaderUiState] = useState( {
    isSidedrawerOpened: false
  } );

  const sidedrawerToggle = () => {
    setHeaderUiState( prevState => ( {
      ...prevState,
      isSidedrawerOpened: !headerUiState.isSidedrawerOpened
    } ) );
  }

  return (
    <header className={ classes.Header }>
      <SideDrawer isSidedrawerOpened={ headerUiState.isSidedrawerOpened } />
      <Backdrop show={ headerUiState.isSidedrawerOpened } clicked={ sidedrawerToggle } />
      <BurgerMenuButton isSidedrawerOpened={ headerUiState.isSidedrawerOpened } sidedrawerToggle={ sidedrawerToggle } />

        <div className={ classes.Brand }>
          <div className={ classes.Logo }>
            <Logo />
          </div>
          <SiteName />
        </div>
     
      <NavBar />
      <Profile />
    </header>
  );
}

export default Header;