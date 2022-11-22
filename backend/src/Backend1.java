public class Backend1 {
    
    boolean userExists(User u) {
        UserMap um = Server.getAllUsers();
        for (User v : um.map.values())
        {
            if (v.equals(u))
            {
                return true;
            }
        }

        return false;
    }
    
    boolean register(String email, String password) {
        User u = new User(email, password);
        if (!userExists(u))
        {
            Server.postUser(u);
            return true;
        }
        return false;
    }
    
    String login(String email, String password) {
        User u = new User(email, password);
        UserMap um = Server.getAllUsers();

        for (String v : um.map.keySet())
        {
            if (um.map.get(v).equals(u))
            {
                return v;
            }
        }

        return null;
    }
    
}

