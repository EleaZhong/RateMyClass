package com.google.firebase.firebaseadmin;

public class Rating {

    private double rating;
    private String professor;
    private String semester;
    private String text;

    public Rating(double rating, String professor, String semester, String text) {
        this.rating = rating;
        this.professor = professor;
        this.semester = semester;
        this.text = text;
    }

    public double getRating() {
        return rating;
    }

    public String getProfessor() {
        return professor;
    }

    public String getSemester() {
        return semester;
    }

    public String getText() {
        return text;
    }

}
