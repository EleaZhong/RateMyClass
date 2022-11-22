import RateMyClass.Server;
import RateMyClass.CourseMap;

public class Backend2 {
    public boolean CourseExist(Course c){
        CourseMap temp = Server.getAllCourses();
        Map<String, User> temp_map = CourseMap.map;
        if(temp_map.containsValue(c)) return true;
        return false;
    }

    public boolean addCourse(String id, String name, String description){
        Course c = new Course(String id, String name, String description);
        if(CourseExist(c)) return false;
        else {
            Server.postCourse(course);
            return true;
        }
    }
}
