import React, { useEffect } from 'react';

import classes from './RollWindow.module.css';

import RollLine from './RollLine/RollLine';
import GeneralButton from '../UI/GeneralButton/GeneralButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const RollWindow = () => {
  useEffect( () => { } );

  return (
    // <div className={ classes.RollWindow }>
    <Container className={ `d-flex align-items-center ${classes.RollWindow}` }>
      <Row>
        <Col>
          <RollLine />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={ classes.ButtonBlock }>
            <GeneralButton name="Open!" />
          </div>
        </Col>
      </Row>
    </Container>
    // </div>
  );
}

export default RollWindow;