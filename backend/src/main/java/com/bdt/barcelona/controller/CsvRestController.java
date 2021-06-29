package com.bdt.barcelona.controller;

import java.io.FileNotFoundException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bdt.barcelona.service.CsvService;

@RestController
@RequestMapping("/api/v1")
public class CsvRestController {
	
	@Autowired
	private CsvService csvService;
	
	/**
	 * Cálculo del ECM (Error Cuadrático Medio).
	 * @param json
	 * @return Resultado del cálculo.
	 */
	
	@PostMapping("/computeECM")
	//public double computeECM(@RequestBody Map<String, Object> json) throws FileNotFoundException {
	public double computeECM(@RequestBody Map<String, Double[]> json) throws FileNotFoundException {
		Double[] predictedData = json.get("data");
		
		System.out.println(predictedData[0] + ", " + predictedData[1] + ", " + predictedData[2] + ", ");
		
		return csvService.computeECM(predictedData);
	}
	
}
