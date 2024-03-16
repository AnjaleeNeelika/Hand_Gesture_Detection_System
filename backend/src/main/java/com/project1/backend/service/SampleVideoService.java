package com.project1.backend.service;

import com.project1.backend.model.SampleVideo;
import com.project1.backend.repository.SamapleVideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SampleVideoService {

    @Autowired
    private SamapleVideoRepository sampleVideoRepository;

    public SampleVideo saveVideo(String filePath) {
        System.out.println("hiiiiiiiii");
        SampleVideo video = new SampleVideo();
        video.setFilePath(filePath);
        return sampleVideoRepository.save(video);
    }

    public Optional<SampleVideo> getVideoById(String id) {
        return sampleVideoRepository.findById(id);
    }


}
