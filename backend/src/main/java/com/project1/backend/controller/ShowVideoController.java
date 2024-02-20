package com.project1.backend.controller;

import com.project1.backend.service.ShowVideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class ShowVideoController {
    private final ShowVideoService showVideoService;

    @Autowired
    public ShowVideoController(ShowVideoService showVideoService) {
        this.showVideoService = showVideoService;
    }

    @GetMapping("/call-python")
    public String callPython() {
        showVideoService.callPythonScript();
        return "Python script called successfully";
    }
}
