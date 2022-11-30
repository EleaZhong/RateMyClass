package com.google.firebase.firebaseadmin;

import java.util.HashMap;

public class Course {

    private String id;
    private String name;
    private int numRatings;
    private double sumRatings;
    private HashMap<String, Rating> ratings;

    public Course(String id, String name) {
        this.id = id;
        this.name = name;
        this.numRatings = 0;
        this.sumRatings = 0;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getAverageRating() {
        return sumRatings/numRatings;
    }

    public String toString() {
        return id + ": " + name;
    }

    public void addRating(Rating rating) {
        if(numRatings == 0) {
            ratings = new HashMap<>();
        }
        numRatings++;
        sumRatings += rating.getRating();
        ratings.put("r" + numRatings, rating);
    }

}
