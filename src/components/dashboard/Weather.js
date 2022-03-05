import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const displayWTimes = ['06:00','08:00','11:00','14:00','17:00', '20:00', '23:00'];

function Weather(props) {
  return (
    Object.keys(props.weather).length === 0 ? <Card>
      <CardContent>
        <Typography variant="caption" display="block" gutterBottom>
          No Data
        </Typography>
      </CardContent>
    </Card> : <Card>
      <CardContent>
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
          <Grid item>
            <Typography variant="caption" display="block" gutterBottom>
              {props.weather.location.region}
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
              {props.weather.forecast.forecastday[0].day.avgtemp_c}&deg;
            </Typography>
          </Grid>
          <Grid item style={
            {
              textAlign: 'right'
            }
          }>
            <img
              src={`https:${props.weather.forecast.forecastday[0].day.condition.icon}`}
              height={30}
              alt=''
              loading="lazy"
            />
            <Typography variant="body2" gutterBottom>
              {props.weather.forecast.forecastday[0].day.condition.text}
            </Typography>
            <Typography variant="body2" gutterBottom>
              H:{props.weather.forecast.forecastday[0].day.maxtemp_c}&deg; L:{props.weather.forecast.forecastday[0].day.mintemp_c}&deg;
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={5} padding={2} direction="row" justifyContent="center" alignItems="center">
          {props.weather.forecast.forecastday[0].hour.map((hr, index) => displayWTimes.includes(hr.time.split(" ")[1]) ? <Grid item key={index}>
              <Typography variant="caption" display="block" gutterBottom>
                {hr.time.split(" ")[1]}
              </Typography>
              <img
                src={`https:${hr.condition.icon}`}
                height={25}
                alt=''
                loading="lazy"
              />
              <Typography variant="button" display="block" gutterBottom>
              {hr.temp_c}&deg;
              </Typography>
            </Grid> : undefined)
          }
        </Grid>
        <Divider />
        <Grid container spacing={5} padding={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item sm={6}>
            <List>
              <ListItem disablePadding secondaryAction={
                    <ListItemText primary={`${props.weather.current.feelslike_c} C`} />
              }>
                <ListItemText primary="High/Low" />
              </ListItem>
              <Divider />
              <ListItem disablePadding secondaryAction={
                    <ListItemText primary={`${props.weather.current.humidity}%`} />
              }>
                <ListItemText primary="Humidity" />
              </ListItem>
              <Divider />
              <ListItem disablePadding secondaryAction={
                    <ListItemText primary={`${props.weather.current.pressure_mb} mb`} />
              }>
                <ListItemText primary="Pressure" />
              </ListItem>
              <Divider />
              <ListItem disablePadding secondaryAction={
                    <ListItemText primary={`${props.weather.current.vis_km} km`} />
              }>
                <ListItemText primary="Visibility" />
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={6}>
            <List dense={true}>
              <ListItem disablePadding secondaryAction={
                      <ListItemText primary={`${props.weather.current.wind_kph} km/h`} />
                }>
                  <ListItemText primary="Wind" />
                </ListItem>
                <Divider />
                <ListItem disablePadding secondaryAction={
                      <ListItemText primary={`${props.weather.current.uv} of 10`} />
                }>
                  <ListItemText primary="UV Index" />
                </ListItem>
                <Divider />
                <ListItem disablePadding secondaryAction={
                      <ListItemText primary={props.weather.forecast.forecastday[0].astro.moon_phase} />
                }>
                  <ListItemText primary="Moon Phase" />
                </ListItem>
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Weather;
