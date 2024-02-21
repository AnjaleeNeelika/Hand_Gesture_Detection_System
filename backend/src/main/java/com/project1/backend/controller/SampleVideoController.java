
package com.project1.backend.controller;

import com.project1.backend.model.SampleVideo;
import com.project1.backend.service.SampleVideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;


import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/videos")
public class SampleVideoController {


    @Autowired
    private SampleVideoService sampleVideoService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadVideo(@RequestParam("file") MultipartFile file) {
        try {
            String uploadDirectory = "E:/UCSC/intern-handproject/videos"; // Change this to your desired directory

            // Create the directory if it doesn't exist
            Files.createDirectories(Paths.get(uploadDirectory));
            // Save the file to the specified location
            Path filePath = Paths.get(uploadDirectory, file.getOriginalFilename());
            Files.write(filePath, file.getBytes());

            SampleVideo savedVideo = sampleVideoService.saveVideo(filePath.toString());

            System.out.println(savedVideo.getId());
            System.out.println(filePath.toString());
            String videoId = savedVideo.getId();


            return ResponseEntity.ok(videoId);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }


//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadVideo(@RequestParam("file") MultipartFile file) {
//        try {
//            String uploadDirectory = "E:/UCSC/intern-handproject/videos"; // Change this to your desired directory
//
//            // Create the directory if it doesn't exist
//            Files.createDirectories(Paths.get(uploadDirectory));
//            // Save the file to the specified location
//            Path filePath = Paths.get(uploadDirectory, file.getOriginalFilename());
//            Files.write(filePath, file.getBytes());
//
//            System.out.println("wada");
//            // Save the file path to the database
//            SampleVideo savedVideo = sampleVideoService.saveVideo(filePath.toString());
//
//            // Run the Python script with the uploaded video file path as an argument
//            String pythonScriptPath = "E:/UCSC/intern-handproject/ml_modules/fullydetect.py";
//            String[] cmd = new String[3];
//            cmd[0] = "python"; // Assuming Python is installed and added to the system's PATH
//            cmd[1] = pythonScriptPath;
//            cmd[2] = filePath.toString(); // Pass the video file path as an argument
//            Process process = Runtime.getRuntime().exec(cmd);
//            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
//            String line;
//            while ((line = reader.readLine()) != null) {
//                System.out.println(line);
//            }
//            int exitCode = process.waitFor();
//            System.out.println("Python script exit code: " + exitCode);
//
//            return ResponseEntity.ok(savedVideo.getId()); // Return the ID of the saved video
//        } catch (IOException | InterruptedException e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
//        }
//    }


    @GetMapping("/view-fulldetect/{id}")
    public ResponseEntity<SampleVideo> getVideoById(@PathVariable String id) {
        Optional<SampleVideo> videoOptional = sampleVideoService.getVideoById(id);
        return videoOptional
                .map(video -> new ResponseEntity<>(video, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


}
