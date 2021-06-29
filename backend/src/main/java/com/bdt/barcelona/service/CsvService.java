package com.bdt.barcelona.service;

import java.io.FileNotFoundException;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bdt.barcelona.utils.CSVReader;

@Service
public class CsvService {
	
	@Autowired
	private CSVReader csvReader;
	
	public JSONObject computeECM(Double[] predictedData) throws FileNotFoundException {
		List<Double> targetData = csvReader.convertCSVToList();
		
		double score = 0;
		
		for (int i = 0; i < targetData.size(); i++)
			score += Math.pow(predictedData[i] - targetData.get(i), 2);
		
		String jsonString = "{\"score\": " + score/targetData.size() + ", \"targetData\": " + this.convertToString(targetData) + ", \"predictedData\": " + this.convertToString(predictedData) + "}";
		
		JSONObject json = new JSONObject(jsonString);
		
		return json;
	}
	
	private String convertToString(List<Double> targetData) {
		StringBuilder sb = new StringBuilder();
		
		sb.append("[");
		
		for (int i = 0; i < targetData.size(); i++) {
			sb.append(targetData.get(i));
			
			if (i != targetData.size()-1)
				sb.append(",");
		}
		
		sb.append("]");
		
		return sb.toString();
	}
	
	private String convertToString(Double[] predictedData) {
		StringBuilder sb = new StringBuilder();
		
		sb.append("[");
		
		for (int i = 0; i < predictedData.length; i++) {
			sb.append(predictedData[i]);
			
			if (i != predictedData.length-1)
				sb.append(",");
		}
		
		sb.append("]");
		
		return sb.toString();
	}
	
}
