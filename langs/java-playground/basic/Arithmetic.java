import static java.lang.Math.*;

class Arithmetic {
  public static void main(String[] args) {
    integerArithmetic();
    casts();
    operators();
    floats();
  }
  private static void integerArithmetic() {
    int numOranges = 5;
    int numApples = 10;
    int totalFruit = numOranges + numApples;
    System.out.println("Total fruit: " + totalFruit);
  }

  private static void casts() {
    short numOranges = 5;
    short numApples = 10;
    short totalFruit = (short) (numOranges + numApples);
    System.out.println("Total fruit: " + totalFruit);
  }

  private static void operators() {
    long numApples = 4L;
    int numOranges = 16;
    long totalFruit = ++numApples + --numOranges;
    System.out.println(numApples + " + " + numOranges + " = " + totalFruit);
    System.out.println("AverageFruit: " + totalFruit / 2);
  }

  private static void floats() {
    float radius = 5E0F;
    float height = 100E-1F;
    double volume = PI * pow(radius, 2) * height;
    System.out.println("Volume = " + volume);
  }
}
