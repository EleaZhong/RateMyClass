import java.util.Map;

public class Backend2 {

    public boolean CourseExist(Course c){
        CourseMap temp = Server.getAllCourses();
        Map<String, Course> temp_map = temp.map;
        if(temp_map.containsValue(c)) return true;
        return false;
    }

    public boolean addCourse(String id, String name, String description){
        Course c = new Course(id, name, description);
        if(CourseExist(c)) return false;
        else {
            Server.postCourse(c);
            return true;
        }
    }
}
