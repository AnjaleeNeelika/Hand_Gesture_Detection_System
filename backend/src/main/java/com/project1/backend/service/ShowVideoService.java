package com.project1.backend.service;

import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class ShowVideoService {
    public void callPythonScript() {
        try {
            ProcessBuilder processBuilder = new ProcessBuilder("python", "E:\\UCSC\\3rdYear\\UCSC_Internship\\SystemDevelopment\\Hand_Gesture_Detection_System\\ml_modules\\pointsDetect.py");

            Process process = processBuilder.start();

            int exitCode = process.waitFor();

            if(exitCode == 0) {
                System.out.println("Python script executed successfully");
            } else {
                System.out.println("Python script execution failed with exit code: " + exitCode);
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
