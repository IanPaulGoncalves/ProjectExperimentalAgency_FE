import React from 'react';
import { Box, Button, Card } from '@material-ui/core';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export interface Props {
  startCity: string;
  endCity: string;
  onAction: any;
}

function TicketComponent(props: Props) {
  return (
    <Card style={{ width: '100%', padding: 10, marginBottom: 10 }}>
      <Box display="flex" width="100%">
        <Box width="60px">
          <DirectionsBusIcon style={{ width: 60, height: 60 }} color="primary" />
        </Box>
        <Box
          margin="0 10px 0 10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexGrow="1"
        >
          <span style={{
            fontSize: 20,
            fontWeight: 500
          }}
          >
            {props.startCity}
          </span>
          <span style={{
            margin: '0 5px',
            display: 'flex'
          }}
          >
            <ArrowForwardIcon />
          </span>
          <span style={{
            fontSize: 20,
            fontWeight: 500
          }}
          >
            {props.endCity}
          </span>
        </Box>
        <Box display="flex">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={props.onAction}
            >
              Comprar
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default TicketComponent;