
class TryExceptions {
  public static class DivisorException extends Exception {
    DivisorException() {
      super();
    }
    DivisorException(String message) {
      super(message);
    }
    DivisorException(int dividend) {
      super("divisor is 0");
      this.dividend = dividend;
    }
    int getDividend() {
      return dividend;
    }
    public String toString() {
      StringBuffer s = new StringBuffer(super.toString());
      return s.append("\n").append("Dividend was: " + dividend).toString();
    }
    private int dividend;
  }
  public static void main(String[] args) {
    for(int i = 1; i >= -1; i--) {
      try {
        System.out.println(divide(3, i));
      } catch(Exception e) {
        System.out.println("Executing catch in main...");
        System.out.println(e.getMessage());
        System.out.println(e.toString());
        e.printStackTrace(System.err);
        if (e instanceof DivisorException) {
          System.out.println("Dividend = " + ((DivisorException)e).getDividend());
        }
      } finally {
        System.out.println("finally in main...");
      }
    }
    System.out.println("Outside loop in main...");
  }

  private static int divide(int dividend, int divisor) throws DivisorException {
    try {
      System.out.println("Entering try block in divide...");
      int result = dividend / divisor;
      System.out.println("after operation in divide...");
      return result;
    } catch(ArithmeticException e) {
      System.out.println("Executing catch in divide...");
      System.out.println(e.getMessage());
      e.printStackTrace();
      System.out.println("throwing DivisorException here...");
      throw new DivisorException(dividend);
    } finally {
      System.out.println("Executing finally in divide.");
    }
  }
}