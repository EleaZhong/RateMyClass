package com.google.firebase.firebaseadmin;

public class User {
    
    private String id;
    private String email;
    private String password;

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getID() {
        return id;
    }

    public void setID(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String toString() {
        return email + " " + password;
    }

    public boolean equals(User other) {
        return (this.email.equals(other.getEmail()) && this.password.equals(other.getPassword()));
    }

}
