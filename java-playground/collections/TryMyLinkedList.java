import MyImplementation.LinkedList;
import java.util.Random;

class TryMyLinkedList {
  public static void main(String[] args) {
    Random r = new Random();
    LinkedList<Integer> integerList = new LinkedList<Integer>();
    for (int i = 0; i < 10; i++) {
      integerList.addItem(r.nextInt(100));
    }

    Integer i = integerList.getFirst();
    while(i != null) {
      System.out.println("\n" + i);
      i = integerList.getNext();
    }

    System.out.println("\nDone with the values!\n");
  }
}
