import Geometry.*;

class TryRectangles {
  public static void main(String[] args) {
    Rectangle r1 = new Rectangle(1, 1, 2, 0);
    System.out.println(r1);

    Rectangle r2 = new Rectangle(-1, 10, 3, 1);
    System.out.println(r2.getEnclosingRect(r1));
  }
}
