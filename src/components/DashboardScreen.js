import { Container, Grid } from "@mui/material";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
	getIpInfo,
	getCurrentIp,
	getWeather,
	getPopulations,
  setSearchIp,
} from "../actions/dashboardActions";

import Weather from "./dashboard/Weather";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import IpInfo from "./dashboard/IpInfo";
import Population from "./dashboard/Population";
import CryptoRates from "./dashboard/CryptoRates";
import CurrencyRates from "./dashboard/CurrencyRates";


class DashboardScreen extends Component {
	componentDidMount = async () => {
		await this.getCurrentIp();
		await this.props.getPopulations();
    setTimeout(async () => {
      if (this.props.dashboard.currentIP !== '') {
        await this.props.getIpInfo(this.props.dashboard.currentIP);
        await this.props.getWeather(this.props.dashboard.currentIP);
      }
    }, 2000);
	};

  getCurrentIp = async () => {
    await this.props.getCurrentIp();
    if (this.props.dashboard.currentIP !== '') {
      this.refreshIp(this.props.dashboard.currentIP);
    }
  }

	refreshIp = async (newIP) => {
    await this.props.setSearchIp(newIP);
		await this.props.getIpInfo(newIP);
		await this.props.getWeather(newIP);
	};

	render() {
    if (this.props.dashboard.currentIP === '') {
      this.getCurrentIp();
    }

		return (
			<>
				<AppBar position="static">
					<Toolbar variant="dense">
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							color="inherit"
							component="div"
						>
							Dashboard
						</Typography>
					</Toolbar>
				</AppBar>
				<Container maxWidth="lg">
					<Grid
						container
						spacing={2}
						direction="row"
						justifyContent="center"
						alignItems="center"
						paddingTop={5}
					>
						<Grid item xs={12}>
							<IpInfo
								{...this.props.dashboard}
								refreshIp={this.refreshIp}
							/>
						</Grid>
						<Grid item xs={6}>
							<Weather {...this.props.dashboard} />
						</Grid>
						<Grid item xs={6}>
							<Population
								countyPopulations={
									this.props.dashboard.countyPopulations
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<CryptoRates />
						</Grid>
						<Grid item xs={12}>
							<CurrencyRates />
						</Grid>
					</Grid>
				</Container>
			</>
		);
	}
}

DashboardScreen.propTypes = {
	dashboard: PropTypes.object.isRequired,
	getIpInfo: PropTypes.func.isRequired,
	getCurrentIp: PropTypes.func.isRequired,
	getWeather: PropTypes.func.isRequired,
  setSearchIp: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
	dashboard: state.dashboard,
});

export default connect(mapStateToProp, {
	getIpInfo,
	getCurrentIp,
	getWeather,
	getPopulations,
  setSearchIp,
})(DashboardScreen);
