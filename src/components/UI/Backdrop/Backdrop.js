import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  const backdropClasses = [classes.Backdrop, !props.showBackdrop ? classes.Hide : null]

  return (
    <div className={ backdropClasses.join( ' ' ) } onClick={props.clicked}></div>
  );
}

export default Backdrop;