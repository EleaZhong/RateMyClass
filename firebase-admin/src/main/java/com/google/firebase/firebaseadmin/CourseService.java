package com.google.firebase.firebaseadmin;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

import com.google.gson.Gson;

//CRUD operations
@Service
public class CourseService {

	public ResponseEntity<String> searchCourse(String name) {
		Gson gson = new Gson();
        CourseMap courses = gson.fromJson("{map:" + getAllCourses() + "}", CourseMap.class);
		for(String key : courses.map.keySet()) {
			Course c = courses.map.get(key);
			if(c.getCode().equals(name)) {
				c.setId(key);
				return new ResponseEntity<>("[" + gson.toJson(c) + "]", HttpStatus.OK);
			}
		}
		return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
	}

    public ResponseEntity<String> getComments(String courseIdentifier) {
        Gson gson = new Gson();
		URL url;
		try {
			url = new URL("https://classmate-104b6-default-rtdb.firebaseio.com/root/courses/" + courseIdentifier + "/comments.json");
			HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
			httpConn.setRequestMethod("GET");
			
			InputStream responseStream = httpConn.getResponseCode() / 100 == 2
					? httpConn.getInputStream()
					: httpConn.getErrorStream();
			Scanner s = new Scanner(responseStream).useDelimiter("\\A");
			String response = s.hasNext() ? s.next() : "";
			if(response.equals("null")) {
				return new ResponseEntity<>("[]", HttpStatus.OK);	
			}
			RatingMap ratings = gson.fromJson("{map:" + response + "}", RatingMap.class);
			for(String key : ratings.map.keySet()) {
				ratings.map.get(key).setId(key);
			}
			String resp = gson.toJson(new ArrayList<Rating>(ratings.map.values()));
			return new ResponseEntity<>(resp, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> insertComment(String professor, String semester, String text, double rating, String classId) {
        Rating r = new Rating(rating, professor, semester, text, classId);
        Gson gson = new Gson();
        CourseMap courses = gson.fromJson("{map:" + getAllCourses() + "}", CourseMap.class);
        Course c = courses.map.get(classId);
        c.addRating(r);
        putCourse(classId, c);
        return new ResponseEntity<>("", HttpStatus.OK); // TODO: Return updated list of ratings?
    }

    public boolean courseExists(String courseID) {

        Gson gson = new Gson();
        CourseMap courses = gson.fromJson("{map:" + getAllCourses() + "}", CourseMap.class);
        if(courses.map != null) {
			for(String key : courses.map.keySet()) {
				Course c = courses.map.get(key);
				if(c.getCode().equals(courseID)) {
					return true;
				}
			}
		}
        return false;

    }
    
    public ResponseEntity<String> getCourse(String courseID) {
        Gson gson = new Gson();
        CourseMap courses = gson.fromJson("{map:" + getAllCourses() + "}", CourseMap.class);
        for(String key : courses.map.keySet()) {
            Course c = courses.map.get(key);
            if(key.equals(courseID)) {
				c.setId(key);
                return new ResponseEntity<>(gson.toJson(c), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> getAll() {

		String response = getAllCourses();
        if(response.equals("")) {
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
		Gson gson = new Gson();
		CourseMap courses = gson.fromJson("{map:" + response + "}", CourseMap.class);
		for(String key : courses.map.keySet()) {
			Course c = courses.map.get(key);
			c.setId(key);
		}
		String finalResponse = gson.toJson(new ArrayList<>(courses.map.values()));
        return new ResponseEntity<>(finalResponse, HttpStatus.OK);

    }

    public String getAllCourses() {
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
            return response;
            
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
    }

    public ResponseEntity<String> insertCourse(String name, String classID) {
        
        if(courseExists(classID)) {
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
        Course c = new Course(classID, name);
        postCourse(c);
        return new ResponseEntity<>("", HttpStatus.OK); // TODO: Return inserted class?

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
