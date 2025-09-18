import java.util.Scanner;
public class Order {

    static  Scanner scanner = new Scanner(System.in);
    static String[] posts = new String[10];
    static int postCount = 0;
    public static void main(String[] args) {
        int choice;
        System.out.println("FACEBOOK POST");
        System.out.println("1. CREATE FB POST");
        System.out.println("2. VIEW ALL FB POST");
        System.out.println("3. EDIT YOUR POST FB");
        System.out.println("4. DELETE POST");
        System.out.println("5. EXIT");

        System.out.print("Enter your choice: " );
        choice = scanner.nextInt();

        switch (choice) {
            case 1:
                createPost(scanner);

                break;
            case 2:
                viewAllpost();

            case 3:
                editPost(scanner);
            default:
                throw new AssertionError();
        }
    }

    private static void createPost(Scanner scanner) {
        if (postCount < posts.length) {
            System.out.print("Enter Your Post: ");
            String post = scanner.nextLine();
            posts[postCount] = post;
            postCount++;
            System.out.print("Post created successfully!");
        } else {
            System.out.println("Post limit reaceh, Cannot create more posts.");
        }
        }
    private static void viewAllpost() {
        if (postCount == 0) {
            System.out.println("No post available.");
        } else {
            System.out.println("All post: ");
            for (int integer = 0; integer < postCount; integer++) {
                System.out.println((integer + 1) + ": " + posts[integer]);

            }
        }
        }
    private  static void  editPost(Scanner scanner) {
        viewAllpost();
        if (postCount > 0) {
            System.out.print("Enter the post number of edit: ");
            int postNumber = scanner.nextInt();
            scanner.nextLine();

                    if (postNumber > 0 && postNumber <= postCount) {
                        System.out.print("Enter the new post: " + postNumber + ": ");
                        String newContent = scanner.nextLine();
                        posts[postNumber - 1] = newContent;
                        System.out.println("Post updated successfully!");
                    } else {
                        System.out.println("Invalid post number.");
                    }
                    }
        }
    }
    
    


