import React, { useState, useEffect, useContext } from 'react';
import ApexChart from 'react-apexcharts';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Result.scss';
import Score from '../../components/Score/Score';
import mockPred from './../../data/predictions_test.json';
import mockData from './../../data/computeECM.json';

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
		categories: [' '],
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
		//data: omitData(mockData.predictedData),
		data: mockData.predictedData,
	},
	{
		name: 'Valores reales',
		//data: omitData(mockData.targetData),
		data: mockData.targetData,
	},
];

function getData() {
	return mockPred.data.map((el) => el * Math.random());
}

function omitData(data) {
	return data.filter((el, i) => i % 6 === 0);
}

export default function Result() {
	//const [data, result] = useContext(Context);
	const [series, setSeries] = useState();

	useEffect(() => {
		setSeries(dataMocked);
		getData();
	}, []);

	const displayGraph = () => {
		return <ApexChart options={options} series={series} type="area" height={350} />;
	};

	return (
		<div className="result">
			<div className="result__wrapper container">
				<h1 className="title--center mb-6">Tus resultados</h1>
				<Score result={mockData.score.toString().slice(0,10)} />
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
