import React, { useState, useEffect, useContext } from 'react';
import ApexChart from 'react-apexcharts';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Result.scss';
import Score from '../../components/Score/Score';
import mockPred from './../../data/predictions_test.json';

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
		type: 'category',
		categories: [" "],
	},
	yaxis: {
		min: 0,
		decimalsInFloat: 2,
	},
	tooltip: {},
};

const dataMocked = [
	{
		name: 'Predicciones',
		data: omitData(mockPred.data),
	},
	{
		name: 'Valores reales',
		data: omitData(getData()),
	},
];

function getData() {
	return mockPred.data.map(el => el * Math.random())
}

function omitData(data) {
	return data.filter((el,i) => i%6 === 0)
}

const resultMocked = 0.254;

export default function Result() {
	//const [data, result] = useContext(Context);
	const [series, setSeries] = useState();

	useEffect(() => {
		setSeries(dataMocked);
		getData()
	}, []);

	const displayGraph = () => {
		return <ApexChart options={options} series={series} type="area" height={350} />;
	};

	return (
		<div className="result">
			<div className="result__wrapper container">
				<Score result={resultMocked} />
				{series && displayGraph()}

				<Link to="/">
					<Button variant="contained" color="primary">
						Volver
					</Button>
				</Link>
			</div>
		</div>
	);
}
