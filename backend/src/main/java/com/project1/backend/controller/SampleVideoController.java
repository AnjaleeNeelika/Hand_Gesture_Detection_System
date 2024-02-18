
package com.project1.backend.controller;

import com.project1.backend.model.SampleVideo;
import com.project1.backend.service.SampleVideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;


import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/videos")
public class SampleVideoController {

    @Autowired
    private SampleVideoService sampleVideoService;

//    @PostMapping("/upload")
//    @ResponseStatus(HttpStatus.CREATED)
//    public SampleVideo uploadSampleVideo(@RequestParam("file") MultipartFile file) throws IOException {
//        System.out.println("hooo");
//        byte[] videoData = file.getBytes();
//        return sampleVideoService.addVideo(videoData);
//    }

//    @GetMapping("/videos")
//    public List<SampleVideo> getAllSampleVideos() {
//        return sampleVideoService.getAllVideos();
//    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadVideo(@RequestParam("file") MultipartFile file) {
        try {
            System.out.println("hooo");

            // Specify the absolute directory where you want to save the files
            String uploadDirectory = "E:/UCSC/intern-handproject/videos"; // Change this to your desired directory

            // Create the directory if it doesn't exist
            Files.createDirectories(Paths.get(uploadDirectory));
            // Save the file to the specified location
            Path filePath = Paths.get(uploadDirectory, file.getOriginalFilename());
            Files.write(filePath, file.getBytes());

            System.out.println("wada");
            // Save the file path to the database
            SampleVideo savedVideo = sampleVideoService.saveVideo(filePath.toString());

            return ResponseEntity.ok(savedVideo.getId()); // Return the ID of the saved video
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }



}
