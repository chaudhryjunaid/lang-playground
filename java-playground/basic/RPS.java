import java.io.Console;
import java.io.Reader;
import java.io.IOException;

class RPS {
  public static void main(String[] args) throws IOException {
    char[] options = {'r', 'p', 's'};
    int win = 0;
    int totalGames = 0;
    int userScore = 0;
    int computerScore = 0;
    Console c =System.console();
    Loop:
    while(true) {
      System.out.println("\n (R)ock / (P)aper / (S)cissors / (Q)uit");
      String input = c.readLine();
      char selection = input.charAt(0);
      System.out.println("Your selection is: " + selection);
      char against = options[(int)Math.round(Math.random() * 2)];
      switch(selection) {
        case 'Q':
        case 'q':
          break Loop;
        case 'R':
        case 'r':
          if (against == 'r') {
            win = 0;
          } else if(against == 'p') {
            win = -1;
          } else if (against == 's') {
            win = 1;
          }
          break;
        case 'P':
        case 'p':
          if (against == 'r') {
            win = 1;
          } else if(against == 'p') {
            win = 0;
          } else if (against == 's') {
            win = -1;
          }
          break;
        case 'S':
        case 's':
          if (against == 'r') {
            win = -1;
          } else if(against == 'p') {
            win = 1;
          } else if (against == 's') {
            win = 0;
          }
          break;
        default:
          System.out.println("You entered an invalid choice. Please try again!");
          continue Loop;
      }
      if (win == 0) {
        System.out.println("It is a draw!");
      } else if (win == 1) {
        System.out.println("The player won!");
        userScore++;
      } else {
        System.out.println("The computer won!");
        computerScore++;
      }
      totalGames++;
      System.out.println("[Scoreboard] Total: " + totalGames 
        + " | Player: " + userScore + " / Computer: " + computerScore);
    }
  }
}
