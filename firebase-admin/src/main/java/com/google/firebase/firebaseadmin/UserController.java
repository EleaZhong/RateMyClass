package com.google.firebase.firebaseadmin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/auth/logIn")
    public ResponseEntity<String> logIn(@RequestParam String email, String password) throws InterruptedException, ExecutionException{
        return userService.logIn(email, password);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/auth/signUp")
    public ResponseEntity<String> signUp(@RequestParam String email, String password) throws InterruptedException, ExecutionException{
        return userService.signUp(email, password);
    }
}

