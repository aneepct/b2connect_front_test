import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';

function IpInfo(props) {
  return (
    Object.keys(props.ipInfo).length === 0 ? <Card>
      <CardContent>
        <Grid 
          container 
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Grid item sm={8}>
            <Typography gutterBottom variant="h6" component="div">
              IP: {props.currentIP}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="delete" size="large" onClick={() => props.refreshIp()}>
              <RefreshIcon fontSize="inherit" />
            </IconButton> 
          </Grid>
        </Grid>
      </CardContent>
    </Card> :<Card>
      <CardContent>
        <Grid 
          container 
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Grid item sm={8}>
            <Typography gutterBottom variant="h6" component="div">
              IP: {props.currentIP}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="delete" size="large" onClick={() => props.refreshIp()}>
              <RefreshIcon fontSize="inherit" />
            </IconButton> 
          </Grid>
          <Grid item sm={12}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>City</TableCell>
                  <TableCell align="left">Region</TableCell>
                  <TableCell align="left">Country</TableCell>
                  <TableCell align="left">Location</TableCell>
                  <TableCell align="left">Timezone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {props.ipInfo.city}
                  </TableCell>
                  <TableCell align="left">{props.ipInfo.region}</TableCell>
                  <TableCell align="left">{props.ipInfo.country}</TableCell>
                  <TableCell align="left">{props.ipInfo.loc}</TableCell>
                  <TableCell align="left">{props.ipInfo.timezone}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default IpInfo;
