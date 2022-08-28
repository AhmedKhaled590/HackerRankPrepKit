import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /*
         * Enter your code here. Read input from STDIN. Print output to STDOUT. Your
         * class should be named Solution.
         */
        Scanner sc = new Scanner(System.in);
        PriorityQueue<Integer> heap = new PriorityQueue<Integer>();
        int q = sc.nextInt();
        while (q-- != 0) {
            int type = sc.nextInt();
            int n = 0;
            if (type == 1 || type == 2) {
                n = sc.nextInt();
            }
            if (type == 1) {
                heap.add(n);
            } else if (type == 2) {
                heap.remove(n);
            } else {
                System.out.println(heap.peek());
            }

        }
    }
}