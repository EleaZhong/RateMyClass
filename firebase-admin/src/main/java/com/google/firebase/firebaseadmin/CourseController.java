package com.google.firebase.firebaseadmin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
public class CourseController {

    @Autowired
    CourseService courseService;

    @GetMapping("/api/class/get")
    public ResponseEntity<String> getCourse(@RequestParam String classID) throws InterruptedException, ExecutionException{
        return courseService.getCourse(classID);
    }

    @GetMapping("/api/class/getAll")
    public ResponseEntity<String> getAll() throws InterruptedException, ExecutionException{
        return courseService.getAllCourses();
    }

    @PostMapping("/api/class/insert")
    public ResponseEntity<String> insert(@RequestParam String name, String classID) throws InterruptedException, ExecutionException{
        return courseService.insertCourse(name, classID);
    }

    @GetMapping("/api/comment")
    public ResponseEntity<String> getComments(@RequestParam String classID) throws InterruptedException, ExecutionException{
        return courseService.getComments(classID);
    }

    @GetMapping("/api/class/average")
    public ResponseEntity<String> getAverageRating(@RequestParam String classID) throws InterruptedException, ExecutionException{
        return courseService.getAverageRating(classID);
    }

    @PostMapping("/api/comment/insert")
    public ResponseEntity<String> insert(@RequestParam String professor, String semester, String text, double rating, String classID) throws InterruptedException, ExecutionException{
        return courseService.insertComment(professor, semester, text, rating, classID);
    }
    
}

