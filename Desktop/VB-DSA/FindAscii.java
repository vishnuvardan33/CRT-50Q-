
public class FindAscii {

    public static void main(String[] args) {

        for (int i = 0; i < 256; i++) {
            char c = (char) i;
            System.out.println("ASCII value of " + c + " is: " + i);
        }
    }
}
