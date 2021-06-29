package com.bdt.barcelona.utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.springframework.stereotype.Component;

@Component
public class CSVReader {
	
	public List<Double> convertCSVToList() throws FileNotFoundException {
		List<Double> data = new ArrayList<>();
	
		Scanner sc = new Scanner(new File("src/main/resources/data/Test_target.csv"));
		
		sc.nextLine();
		
		while (sc.hasNext())
			data.add(Double.parseDouble(sc.nextLine()));
		
		return data;	
	}
	
}
