package com.project1.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "videos")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SampleVideo {


    @Id
    private String id;
    private String filePath;


}
