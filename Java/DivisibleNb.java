public class DivisibleNb {
    public static void main(String[] args) {
        System.out.println(isDivisible(3,1,3));
    }
    public static boolean isDivisible(long n , long x, long y){
        boolean xDivisible = n % x == 0;
        boolean yDivisible = n % y == 0;
        return xDivisible && yDivisible;
    }
}
