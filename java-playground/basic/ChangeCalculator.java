import java.io.Console;

class ChangeCalculator {
  private static int[] denominations = {5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1};
  public static void main(String[] args) {
    Console console = System.console();
    while (true) {
      String priceString = console.readLine("Price? ");
      int price = Integer.parseInt(priceString);
      if (price == 0) {
        break;
      }
      String amountGivenString = console.readLine("Amount given? ");
      int amountGiven = Integer.parseInt(amountGivenString);
      if (amountGiven < price) {
        System.out.println("Price greater than amount given!\n");
        continue;
      }
      printChange(amountGiven - price);
      System.out.println("\n");
    }
  }

  private static void printChange(int amount) {
    int remainder = amount;
    for(int denomination : denominations) {
      if (remainder >= denomination) {
        System.out.println(remainder / denomination + " notes of " + denomination);
        remainder %= denomination;
      }
    }
  }
}
