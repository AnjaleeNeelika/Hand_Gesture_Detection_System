package com.project1.backend.repository;

import com.project1.backend.model.SampleVideo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SamapleVideoRepository extends MongoRepository<SampleVideo, String> {
}



