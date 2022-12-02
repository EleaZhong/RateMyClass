package com.google.firebase.firebaseadmin;

import java.util.HashMap;

public class Course {

    private String id;
    private String code;
    private String name;
    private int commentnum;
    private int sum;
    private double ratings;
    private HashMap<String, Rating> comments;

    public Course(String code, String name) {
        this.code = code;
        this.name = name;
        this.commentnum = 0;
        this.sum = 0;
    }

    public double getRatings() {
        return ratings;
    }

    public String getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public HashMap<String, Rating> getComments() {
        return comments;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getAverageRating() {
        return (double)(sum)/commentnum;
    }

    public String toString() {
        return id + ": " + name;
    }

    public void addRating(Rating rating) {
        if(commentnum == 0) {
            comments = new HashMap<>();
        }
        commentnum++;
        sum += rating.getRating();
        ratings = getAverageRating();
        comments.put("r" + commentnum, rating);
    }

}
