package com.google.firebase.firebaseadmin;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

import com.google.gson.Gson;

//CRUD operations
@Service
public class CourseService {

    public ResponseEntity<String> getComments(String courseIdentifier) {
        URL url;
		try {
			url = new URL("https://classmate-104b6-default-rtdb.firebaseio.com/root/courses/" + courseIdentifier + "/ratings.json");
			HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
			httpConn.setRequestMethod("GET");
			
			InputStream responseStream = httpConn.getResponseCode() / 100 == 2
					? httpConn.getInputStream()
					: httpConn.getErrorStream();
			Scanner s = new Scanner(responseStream).useDelimiter("\\A");
			String response = s.hasNext() ? s.next() : "";
            return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> getAverageRating(String courseIdentifier) {
        Gson gson = new Gson();
        CourseMap courses = gson.fromJson("{map:" + getAllCourses() + "}", CourseMap.class);
        Course c = courses.map.get(courseIdentifier);
        return new ResponseEntity<>("{rating: " + c.getAverageRating() + "}", HttpStatus.OK);
    }

    public ResponseEntity<String> insertComment(String professor, String semester, String text, double rating, String courseIdentifier) {
        Rating r = new Rating(rating, professor, semester, text);
        Gson gson = new Gson();
        CourseMap courses = gson.fromJson("{map:" + getAllCourses() + "}", CourseMap.class);
        Course c = courses.map.get(courseIdentifier);
        c.addRating(r);
        putCourse(courseIdentifier, c);
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    public boolean courseExists(String courseID) {

        Gson gson = new Gson();
        CourseMap courses = gson.fromJson("{map:" + getAllCourses() + "}", CourseMap.class);
        for(String key : courses.map.keySet()) {
            Course c = courses.map.get(key);
            if(c.getId().equals(courseID)) {
                return true;
            }
        }
        return false;

    }
    
    public ResponseEntity<String> getCourse(String courseID) {
        
        Gson gson = new Gson();
        CourseMap courses = gson.fromJson("{map:" + getAllCourses() + "}", CourseMap.class);
        for(String key : courses.map.keySet()) {
            Course c = courses.map.get(key);
            if(c.getId().equals(courseID)) {
                return new ResponseEntity<>("{" + key + ":" + gson.toJson(c) + "}", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);

    }

    public ResponseEntity<String> getAllCourses() {
        URL url;
		try {
			url = new URL("https://classmate-104b6-default-rtdb.firebaseio.com/root/courses.json");
			HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
			httpConn.setRequestMethod("GET");
			
			InputStream responseStream = httpConn.getResponseCode() / 100 == 2
					? httpConn.getInputStream()
					: httpConn.getErrorStream();
			Scanner s = new Scanner(responseStream).useDelimiter("\\A");
			String response = s.hasNext() ? s.next() : "";
            return new ResponseEntity<>(response, HttpStatus.OK);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> insertCourse(String name, String classID) {
        
        if(courseExists(classID)){
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
        Course c = new Course(classID, name);
        postCourse(c);
        return new ResponseEntity<>("", HttpStatus.OK);

    }

    public static void postCourse(Course course) {
		URL url;
		try {
			url = new URL("https://classmate-104b6-default-rtdb.firebaseio.com/root/courses.json");
			HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
			httpConn.setRequestMethod("POST");
			httpConn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			httpConn.setDoOutput(true);
			OutputStreamWriter writer = new OutputStreamWriter(httpConn.getOutputStream());
			Gson gson = new Gson();
			String str = gson.toJson(course);
			writer.write(str);
			writer.flush();
			writer.close();
			httpConn.getOutputStream().close();

			InputStream responseStream = httpConn.getResponseCode() / 100 == 2
					? httpConn.getInputStream()
					: httpConn.getErrorStream();
			Scanner s = new Scanner(responseStream).useDelimiter("\\A");
			String response = s.hasNext() ? s.next() : "";
			System.out.println(response);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

    public static void putCourse(String courseIdentifier, Course course) {
		URL url;
		try {
			url = new URL("https://classmate-104b6-default-rtdb.firebaseio.com/root/courses/" + courseIdentifier + ".json");
			HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
			httpConn.setRequestMethod("PUT");
			httpConn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			httpConn.setDoOutput(true);
			OutputStreamWriter writer = new OutputStreamWriter(httpConn.getOutputStream());
			Gson gson = new Gson();
			String str = gson.toJson(course);
			writer.write(str);
			writer.flush();
			writer.close();
			httpConn.getOutputStream().close();

			InputStream responseStream = httpConn.getResponseCode() / 100 == 2
					? httpConn.getInputStream()
					: httpConn.getErrorStream();
			Scanner s = new Scanner(responseStream).useDelimiter("\\A");
			String response = s.hasNext() ? s.next() : "";
			System.out.println(response);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
