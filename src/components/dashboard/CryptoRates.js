import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import {AdvancedRealTimeChart} from 'react-ts-tradingview-widgets';

function CryptoRates() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom component="div">
          Crypto Rates
        </Typography>
        <Grid container spacing={5} padding={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item sm={12}>
            <AdvancedRealTimeChart symbol="FTX:BTCUSD" height={500} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CryptoRates;
