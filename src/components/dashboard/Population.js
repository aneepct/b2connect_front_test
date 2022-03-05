import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid } from "@mui/material";
import { Chart } from "react-google-charts";

const options = {
	title: "Population",
	chartArea: { width: "70%" },
	hAxis: {
		title: "Total Population",
		minValue: 0,
	},
	vAxis: {
		title: "Country",
	},
};

const formatCountyPopulations = (countyPopulations) => {
	const populations = countyPopulations.map((item) => [
		item.country,
		item.population,
	]);
	populations.unshift(["Country", "Population"]);
	return populations;
};

const Population = ({ countyPopulations }) => (
	<Card>
		<CardContent>
			<Grid container>
				<Grid item sm={12}>
					<Chart
						chartType="BarChart"
						width="100%"
						height="400px"
						data={formatCountyPopulations(countyPopulations)}
						options={options}
					/>
				</Grid>
			</Grid>
		</CardContent>
	</Card>
);

Population.propTypes = {
	countyPopulations: PropTypes.array,
};

export default Population;
