import java.util.Map;
import java.util.HashMap;

public class Course {

    private String id;
    private String name;
    private String description;
    private int numRatings;
    private double sumRatings;
    private Map<String, Rating> ratings;

    public Course(String id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.numRatings = 0;
        this.sumRatings = 0;
        this.ratings = new HashMap<String, Rating>();
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getAverageRating() {
        return sumRatings/numRatings;
    }

    public String toString() {
        return id + ": " + name;
    }

    public void addRating(Rating rating) {
        numRatings++;
        sumRatings += rating.getRating();
        ratings.put("r" + numRatings, rating);
    }

}
