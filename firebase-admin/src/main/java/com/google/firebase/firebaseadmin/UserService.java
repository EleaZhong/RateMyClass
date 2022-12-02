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
public class UserService {
	
	public ResponseEntity<String> logIn(String email, String password) {
		User u = new User(email, password);
		Gson gson = new Gson();
        UserMap users = gson.fromJson("{map:" + getAllUsers() + "}", UserMap.class);
        for(String key : users.map.keySet()) {
			User v = users.map.get(key);
            if (v.equals(u)) {
                return new ResponseEntity<>(key, HttpStatus.OK); // TODO: FIX BODY?
            }
        }
		return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<String> signUp(String email, String password) {
		User u = new User(email, password);
		Gson gson = new Gson();
        UserMap users = gson.fromJson("{map:" + getAllUsers() + "}", UserMap.class);
        for (User v : users.map.values()) {
            if (u.getEmail().equals(v.getEmail())) {
                return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
            }
        }
		postUser(u);
		return new ResponseEntity<>("", HttpStatus.OK); // TODO: FIX BODY?
	}

	public void postUser(User user) {
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
			Scanner s = new Scanner(responseStream).useDelimiter("\\A");
			String response = s.hasNext() ? s.next() : "";

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public String getAllUsers() {
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
            return response;
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		return null;
	}

}
