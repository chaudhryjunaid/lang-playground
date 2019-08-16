import static java.lang.Character.*;

class DecipherChar {
  public static void main(String[] args) {
    usingOperators('c');
    usingOperators('C');
    usingOperators('\n');

    usingLibrary('d');
    usingLibrary('D');
    usingLibrary('\n');
  }

  private static void usingOperators(char c) {
    if (c >= 'A' && c <='Z') {
      System.out.println("You have an UPPERCASE letter");
    } else if (c >= 'a' && c <= 'z') {
      System.out.println("You have an LOWERCASE letter");
    } else {
      System.out.println("This is not a letter");
    }
   }

   private static void usingLibrary(char c) {
    if (isUpperCase(c)) {
      System.out.println("You have an UPPERCASE letter");
    } else if (isLowerCase(c)) {
      System.out.println("You have an LOWERCASE letter");
    } else {
      System.out.println("This is not a letter");
    }
   }
}