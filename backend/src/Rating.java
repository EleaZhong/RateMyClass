public class Rating {

    private double rating;
    private String userIdentifier;
    private String professor;
    private String semester;
    private String comment;

    public Rating(double rating, String userIdentifier, String professor, String semester, String comment) {
        this.rating = rating;
        this.userIdentifier = userIdentifier;
        this.professor = professor;
        this.semester = semester;
        this.comment = comment;
    }

    public double getRating() {
        return rating;
    }

    public String getUserIdentifier() {
        return userIdentifier;
    }

    public String getProfessor() {
        return professor;
    }

    public String getSemester() {
        return semester;
    }

    public String getComment() {
        return comment;
    }

}
