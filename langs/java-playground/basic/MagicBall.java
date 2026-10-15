import java.io.Console;

class MagicBall {
  public static void main(String[] args) {
    Console console = System.console();
    console.readLine("What is your question?\n");
    System.out.println("The answer to your query is: " + ((int)(Math.random() * 100 + 1)));
  }
}