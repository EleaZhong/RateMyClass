public class Backend3 {
    public static void main(String[] args){
        addRating(4.5, "", "Redekopp", "2", "cool", "-NHRUlzjbCY-o7vaXx4y");
    }

    public static boolean addRating(double rating, String userIdentifier, String professor, String semester, String comment, String courseIdentifier){
        Rating r = new Rating(rating, userIdentifier, professor, semester, comment);
        CourseMap m = Server.getAllCourses();
        Course c = m.map.get(courseIdentifier);
        c.addRating(r);
        Server.putCourse(courseIdentifier, c);
        return true;
    }

}
