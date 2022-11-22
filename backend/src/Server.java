import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

import com.google.gson.Gson;

public class Server {
	
<<<<<<< HEAD
	public static void main(String[] args) {
//		 Course c = new Course("CSCI 270", "Algorithms", "Greedy things lol");
//		 c.addRating(new Rating(5, "", "Kempe", "Fall 2022", "AMAZING!"));
//		 putCourse("-NHRUlzjbCY-o7vaXx4y", c);
//		 CourseMap courses = getAllCourses();
//         for(String key : courses.map.keySet()) {
//             System.out.println(courses.map.get(key));
//         }
	}

=======
>>>>>>> aae1f494b60b75c2b54758707bedd9604ed351de
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

	public static CourseMap getAllCourses() {
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
            Gson gson = new Gson();
            CourseMap courses = gson.fromJson("{map:" + response + "}", CourseMap.class);
            return courses;

		} catch (Exception e) {
			e.printStackTrace();
			
		}
		return null;
	}
	
	public static void postUser(User user) {
		URL url;
		try {
			url = new URL("https://classmate-104b6-default-rtdb.firebaseio.com/root/users.json");
			HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
			httpConn.setRequestMethod("POST");
			httpConn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			httpConn.setDoOutput(true);
			OutputStreamWriter writer = new OutputStreamWriter(httpConn.getOutputStream());
			Gson gson = new Gson();
			String str = gson.toJson(user);
			writer.write(str);
			writer.flush();
			writer.close();
			httpConn.getOutputStream().close();
			InputStream responseStream = httpConn.getResponseCode() / 100 == 2
					? httpConn.getInputStream()
					: httpConn.getErrorStream();
			// Scanner s = new Scanner(responseStream).useDelimiter("\\A");
			// String response = s.hasNext() ? s.next() : "";
			// System.out.println(response);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static UserMap getAllUsers() {
		URL url;
		try {
			url = new URL("https://classmate-104b6-default-rtdb.firebaseio.com/root/users.json");
			HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
			httpConn.setRequestMethod("GET");
			
			InputStream responseStream = httpConn.getResponseCode() / 100 == 2
					? httpConn.getInputStream()
					: httpConn.getErrorStream();
			Scanner s = new Scanner(responseStream).useDelimiter("\\A");
			String response = s.hasNext() ? s.next() : "";
            Gson gson = new Gson();
            UserMap users = gson.fromJson("{map:" + response + "}", UserMap.class);
            return users;
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		return null;
	}

}