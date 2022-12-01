package com.google.firebase.firebaseadmin;

public class Rating {

    private String id;
    private String classId;
    private double rating;
    private String professor;
    private String semester;
    private String text;

    public Rating(double rating, String professor, String semester, String text, String classId) {
        this.classId = classId;
        this.rating = rating;
        this.professor = professor;
        this.semester = semester;
        this.text = text;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getClassId() {
        return classId;
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
