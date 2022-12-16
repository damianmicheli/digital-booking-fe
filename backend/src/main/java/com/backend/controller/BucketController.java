package com.backend.controller;

import com.backend.service.IAmazonClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/s3/")
public class BucketController {

    @Autowired
    private IAmazonClientService amazonClient;


    @PostMapping("/subir")
    public ResponseEntity<?> uploadFile(@RequestPart(value = "file") MultipartFile file) {

        return ResponseEntity.ok(amazonClient.uploadFile(file));

    }

    @DeleteMapping("/borrar")
    public String deleteFile(@RequestPart(value = "url") String fileUrl) {
        return amazonClient.deleteFileFromS3Bucket(fileUrl);
    }
}