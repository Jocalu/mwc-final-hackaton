package com.bdt.barcelona.service;

import java.io.FileNotFoundException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bdt.barcelona.utils.CSVReader;

@Service
public class CsvService {
	
	@Autowired
	private CSVReader csvReader;
	
	public double computeECM(Double[] predictedData) throws FileNotFoundException {
		List<Double> targetData = csvReader.convertCSVToList();
		
		double score = 0;
		
		for (int i = 0; i < targetData.size(); i++)
			score += Math.pow(predictedData[i] - targetData.get(i), 2);
		
		return score/targetData.size();
	}
	
}
