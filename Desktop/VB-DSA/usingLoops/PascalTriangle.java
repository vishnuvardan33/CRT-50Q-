
public class PascalTriangle {

    public static int funNcR(int n, int r) {
        int res = 1;
        for (int i = 1; i < r; i++) {
            res *= (n - i);
            res /= (i);

        }
        return res;
    }

    public static void main(String[] args) {//this is works when given Row and Column in a pascal Triangle and asks element👌

        System.out.println(funNcR(5, 3));
    }
}
