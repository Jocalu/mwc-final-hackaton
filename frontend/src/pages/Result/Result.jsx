import React, { useState, useEffect, useContext } from 'react';
import ApexChart from 'react-apexcharts';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./Result.scss";

const options = {
	chart: {
		height: 350,
		type: 'area',
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: 'smooth',
	},
	xaxis: {
		type: 'numeric',
		min: 1,
		max: 7,
		tickAmount: 7,
	},
	tooltip: {},
};

const dataMocked = [
	{
		name: 'series1',
		data: [31, 40, 28, 51, 42, 109, 100],
	},
	{
		name: 'series2',
		data: [11, 32, 45, 32, 34, 52, 41],
	},
];

const resultMocked = 0.25;

export default function Result() {
	//const [data, result] = useContext(Context);
	const [series, setSeries] = useState();

	useEffect(() => {
		setSeries(dataMocked);
	}, []);

	const displayGraph = () => {
		return <ApexChart options={options} series={series} type="area" height={350} />;
	};

	return (
		<div>
			{series && displayGraph()}
			<Link to="/">
				<Button variant="contained" color="primary">
					Volver
				</Button>
			</Link>
		</div>
	);
}
