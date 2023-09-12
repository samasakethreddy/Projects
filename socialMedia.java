import java.util.*;

class practice {
    public static void main(String[] args) {
        SocialMedia sc = new SocialMedia();
        sc.register("saketh");
        sc.register("mini");
        sc.post("saketh", "post 1");
        sc.post("saketh", "post 2");
        sc.post("mini", "post 3");
        sc.post("mini", "post 4");
        sc.post("saketh", "post 5");
        sc.like("saketh", "post 2", "mini");
        sc.like("saketh", "post 1", "mini");
        sc.like("mini", "post 3", "saketh");
        sc.like("mini", "post 3", "saketh1");
        sc.like("mini", "post 3", "saketh2");
        sc.getMostLikedPost();
        System.out.println(SocialMedia.users);
    }
}

class SocialMedia {

    static HashMap<String, HashMap<String, HashSet<String>>> users = new HashMap<String, HashMap<String, HashSet<String>>>();

    static int mostLikes = -1 ;
    static String mostLikedPost = "" ;
    public void register(String username) {
        if (users.containsKey(username)) {
            System.out.println("Username already exists...Try Again !!!");
            return;
        }
        users.put(username, new HashMap<>());
        System.out.println("Registration successful !!!");
    }

    public void post(String username, String postContent) {
        if (!users.containsKey(username)) {
            System.out.println("Username doesn't exists...Try Again !!!");
            return;
        }
        users.get(username).put(postContent, new HashSet<String>());
        System.out.println("Posted successfully");
    }

    public void like(String username, String post, String likedUser) {
        if (users.containsKey(username) && users.get(username).containsKey(post)) {
            users.get(username).get(post).add(likedUser);
            // Update the like count for this post
            int n = users.get(username).get(post).size();
            if(mostLikes<n){
                mostLikedPost = post;
                mostLikes = n;
            }
            System.out.println("Liked by " + likedUser);
        } else {
            System.out.println("Invalid username or post...Try Again !!!");
        }
    }
    
    public void getMostLikedPost(){
        System.out.println("Most Liked picture is "+mostLikedPost+" with "+mostLikes+" likes...");
    }
}